import { Routes } from "@angular/router";

// Components
import { ByCapitalComponent } from "./pages/by-capital/by-capital.component";

export const countryRoutes: Routes = [
    {
        path: '',
        component: ByCapitalComponent
    }
];

export default countryRoutes;
