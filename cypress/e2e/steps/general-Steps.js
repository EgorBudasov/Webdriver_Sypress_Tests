
export class GeneralSteps{
    
    visitDataTable(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        .url().should('include','Data-Table')
    }

    


}