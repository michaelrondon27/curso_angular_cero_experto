import { Component, computed, input, InputSignal, Signal } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

// Utils
import { FormUtils } from '@utils/form-utils';

@Component({
    selector: 'form-error-label',
    imports: [],
    templateUrl: './form-error-label.component.html'
})
export class FormErrorLabel {

    public control: InputSignal<AbstractControl> = input.required<AbstractControl>();

    get errorMessage(): string | null {
        const errors: ValidationErrors = this.control().errors || {};

        return this.control().touched && Object.keys(errors).length > 0
            ? FormUtils.getTextError(errors)
            : null
    }

}
