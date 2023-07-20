import { DropdownPage } from "../pages/dropdown-Page";

export class DropdownSteps{
    visit(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        
     }
       verifyAllTitleAreExist(arrayOfValues){ 
        arrayOfValues.forEach(title =>{
          DropdownPage.getDivByTitle(title).should('exist').invoke('text').should('eq',title)
    })
}
  verifyAllDropdownsOptions(arrayOfValues,dropdownID){
    arrayOfValues.forEach(value =>{
     DropdownPage.getDropdownById(dropdownID).should('exist').select(value).invoke('val').should('eq',value)
    })
}
 
getCheckBoxesByID(id){
    DropdownPage.getCheckBoxesByID(id).uncheck().should('not.be.checked')
    .check().should('be.checked')
}

verifyRadioButtonsColor(arrayOfValues){
    DropdownPage.verifyRadioButtonsColor(arrayOfValues)
}

getSelectedDisabledBlockStep(){
    DropdownPage.getSelectedDisabledBlock.should('exist')
}

verifySelectedDisabledFruits(arrayOfValues){
    DropdownPage.verifySelectedDisabledFruits(arrayOfValues)
}
    
}

export const dropdownSteps = new DropdownSteps()