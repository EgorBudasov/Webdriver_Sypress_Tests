/// <reference types="Cypress" />



import { DropdownPage } from "../pages/dropdown-Page";
import { dropdown1,dropdown2,dropdown3,title,dropdowmFruit} from "../test-data/dropdown-values";
import { checkboxIds } from "../test-data/dropdown-values";
import { radioButtonsArr,selectedDisabledFruitArr } from "../test-data/dropdown-values";
import { dropdownPage } from "../pages/dropdown-Page";
import { dropdownSteps } from "../steps/dropdown-steps";



const dropdown = new DropdownPage


describe('Dropdown', () => {
    beforeEach(()=>{
        dropdownSteps.visit()
    })
    it( `select Dropdown`, () => {

        // dropdown.getWebdriverUniversityLink().should('exist')
        
        // dropdown1.forEach(value =>{
        //     dropdown.getDropdownById(1).should('exist').select(value).invoke('val').should('eq',value)
        // })  //выбираем первый дропдаун и по очереди проверяем все его значения.сравниваем с нашим массивом.
        dropdownSteps.verifyAllTitleAreExist(title)

        dropdownSteps.verifyAllDropdownsOptions(dropdown1,1)
        dropdownSteps.verifyAllDropdownsOptions(dropdown2,2)
        dropdownSteps.verifyAllDropdownsOptions(dropdown3,3)

    });
    it('Checkboxes', () => {
        dropdown.getAllCheckBoxes().should('have.length',4)
        dropdownSteps.getCheckBoxesByID(3)
    });
    it('Radio Buttons', () => {
        dropdown.verifyAllRadiButtons().should('have.length',5)
        dropdownSteps.verifyRadioButtonsColor(radioButtonsArr)
    });
    it('Selected and Disabled block', () => {
        dropdownSteps.getSelectedDisabledBlockStep()
        //dropdownSteps.verifySelectedDisabledFruits(selectedDisabledFruitArr)
        dropdown.verifySelectedDisabledDropdownOptions(dropdowmFruit)
    });
});