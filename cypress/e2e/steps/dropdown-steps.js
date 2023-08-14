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

verifyRadioButtonsColorStep(arrayOfValues){
    arrayOfValues.forEach((colorvalue)=>{
        DropdownPage.getRadioButtonsById.find('input').check(colorvalue)
        .should('be.checked').should('have.value',colorvalue)
    })
    
}

getSelectedDisabledBlockStep(){
    DropdownPage.getSelectedDisabledBlock.should('exist')
}

verifySelectedDisabledVegetable(arrayOfValues){
    DropdownPage.verifySelectedDisabledVegetable(arrayOfValues)
}
    
}

export const dropdownSteps = new DropdownSteps()