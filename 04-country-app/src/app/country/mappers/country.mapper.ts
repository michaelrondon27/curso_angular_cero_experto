// Interfaces
import { Country } from "../interfaces/country.interface";
import { RestCountry } from "../interfaces/rest-countries.interface";

export class CountryMapper {

    public static mapRestCountryToCountry(restCountry: RestCountry): Country {
        return {
            capital   : restCountry.capital.join(','),
            cca2      : restCountry.cca2,
            flag      : restCountry.flag,
            flagSvg   : restCountry.flags.svg,
            name      : restCountry.translations['spa'].common ?? 'No Spanish Name',
            population: restCountry.population,
            region    : restCountry.region,
            subregion : restCountry.subregion
        };
    }

    public static mapRestCountryArrayToCountryArray(restCountries: RestCountry[]): Country[] {
        return restCountries.map(this.mapRestCountryToCountry);
    }

}
