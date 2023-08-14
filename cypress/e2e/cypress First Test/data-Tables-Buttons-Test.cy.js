/// <reference types="Cypress" />
import { tablesPage } from "../pages/data-Tables-Buttons-Page";
import { tablesSteps } from "../steps/data-Tables-Buttons-Steps";
import { GeneralSteps } from "../steps/general-Steps";

const generalSteps = new GeneralSteps


describe('', () => {
    beforeEach(()=>{
        generalSteps.visitDataTable()
    })
    it('check navbar link', () => {
        tablesSteps.getNavbarSteps()
    });
    it('check title', () => {
        tablesSteps.getTitleSteps()
    });
});