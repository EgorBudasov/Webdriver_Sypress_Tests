export class HiddenElementsPage{
   static get getNotDisplayedButton(){
        return cy.get('#button1')
    }
    static get   getVisibilityButton(){
        return cy.get('#button2')
    }
    static get   getNotDisplayedButton(){
        return cy.get('#button3')
    }
}