/// <reference types="Cypress" />

import { tablesPage } from "../pages/data-Tables-Buttons-Page";
import { users } from "../test-data/data-tables";

class TablesSteps{

    getNavbarSteps(){
        TablesPage.navbar.should('exist')
    }

    getTitleSteps(){
        TablesPage.getTitle.should('have.text','Data, Tables & Button States')
    }

}

export const tablesSteps = new TablesSteps