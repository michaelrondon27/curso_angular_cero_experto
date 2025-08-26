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
            name      : restCountry.name.common,
            population: restCountry.population
        };
    }

    public static mapRestCountryArrayToCountryArray(restCountries: RestCountry[]): Country[] {
        return restCountries.map(this.mapRestCountryToCountry);
    }

}
