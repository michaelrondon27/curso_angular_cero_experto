import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { filter, switchMap } from 'rxjs';

import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
    selector: 'app-new-page',
    templateUrl: './new-page.component.html'
})
export class NewPageComponent implements OnInit {

    public heroForm: FormGroup = new FormGroup({
        alt_img:          new FormControl(''),
        alter_ego:        new FormControl(''),
        characters:       new FormControl(''),
        first_appearance: new FormControl(''),
        id:               new FormControl<string>(''),
        publisher:        new FormControl<Publisher>(Publisher.DCComics),
        superhero:        new FormControl<string>('', { nonNullable: true })
    });

    public publishers = [
        { id: Publisher.DCComics, desc: 'DC - Comics' },
        { id: Publisher.MarvelComics, desc: 'Marvel - Comics' }
    ];

    constructor(
        private activatedRoute: ActivatedRoute,
        private dialog: MatDialog,
        private heroesService: HeroesService,
        private router: Router,
        private snackbar: MatSnackBar
    ) { }

    ngOnInit(): void {
        if (!this.router.url.includes('edit')) return;

        this.activatedRoute.params
            .pipe(
                switchMap(({ id }) => this.heroesService.getHeroById(id))
            ).subscribe(hero => {
                if (!hero) return this.router.navigateByUrl('/');

                this.heroForm.reset(hero);
                return;
            });
    }

    get currentHero(): Hero {
        const hero = this.heroForm.value as Hero;

        return hero;
    }

    onDeleteHero(): void {
        if (!this.currentHero.id) throw Error('Hero id is required');

        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            data: this.heroForm.value
        });

        dialogRef.afterClosed()
            .pipe(
                filter((result: boolean) => result),
                switchMap(() => this.heroesService.deleteHeroById(this.currentHero.id)),
                filter((wasDeleted: boolean) => wasDeleted)
            )
            .subscribe(() => {
                this.router.navigate(['/heroes']);
            });
    }

    onSubmit(): void {
        if (this.heroForm.invalid) return;

        if (this.currentHero.id) {
            this.heroesService.updateHero(this.currentHero)
                .subscribe(hero => this.showSnackbar(`¡${ hero.superhero } actualizado!`));

            return;
        }

        this.heroesService.addHero(this.currentHero)
            .subscribe(hero => {
                this.router.navigate(['/heroes/edit', hero.id]);
                this.showSnackbar(`¡${ hero.superhero } creado!`);
            });
    }

    showSnackbar(message: string): void {
        this.snackbar.open(message, 'Cerrar', {
            duration: 2500
        });
    }

}
