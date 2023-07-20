
//import { title } from "../test-data/dropdown-values"

export class DropdownPage{
    
   static get getWebdriverUniversityLink(){
        cy.get("a[#='nav-title']")
    }
    
    static get getWebdriverUniversityTitle(){
        cy.get('h1').should('contain','Dropdown Menu(s), Checkboxe(s) & Radio Button(s)')
    }
    static getDivByTitle(title){
        return cy.xpath(`//div[@class="thumbnail"]/h2[contains(text(), '${title}') ]`)
    }
   static  getDropdownById(id){
        return cy.xpath(`//div[@class="thumbnail"]//*[contains(text(), "Dropdown Menu(s)")]/..//select[@id="dropdowm-menu-${id}"]`)
    }   

 getAllCheckBoxes(){
    return cy.get('input[type="checkbox"]')
}
 static  getCheckBoxesByID(id) {
  return  cy.xpath(`//div[@id='checkboxes']//input[@value='option-${id}']`)
    
 }


 static verifyRadioButtonsColor(arrayOfValues){
    arrayOfValues.forEach(colorvalue =>{
       this.getRadioButtonsById.find('input').check(colorvalue)
       .should('be.checked').should('have.value',colorvalue)
    })

}

verifyAllRadiButtons(){
    return cy.xpath('//form[@id="radio-buttons"]/input[@type="radio"]')
}
static get getRadioButtonsById(){
  return cy.xpath('//form[@id="radio-buttons"]')  
}


 static get getSelectedDisabledBlock(){
 return   cy.xpath("//h2[contains(text(),'Selected & Disabled')]")
}

 static get getSelectedDisabledRadioButtons(){
 return   cy.xpath('//form[@id = "radio-buttons-selected-disabled"]')
}

static verifySelectedDisabledFruits(arrayOfValues){
    arrayOfValues.forEach(Fruitvalue =>{
       this.getSelectedDisabledRadioButtons.find('input').check(Fruitvalue)
       .should('be.checked').should('have.value',Fruitvalue)
    })

}

 getSelectedDisabledDropdownList(){
 return cy.xpath('//select[@id="fruit-selects"]')
}

   verifySelectedDisabledDropdownOptions(arrayOfValues){
    arrayOfValues.forEach(value =>{
        cy.xpath('//select[@id="fruit-selects"]//option').should('have.length', 4);
        if(value !== 'orange'){
            this.getSelectedDisabledDropdownList().should('exist').select(value).invoke('val').should('eq',value)
        }
        else{
            cy.xpath('//select[@id="fruit-selects"]//option[@value="orange"]').should('be.disabled')
        }
     
    })
}

}