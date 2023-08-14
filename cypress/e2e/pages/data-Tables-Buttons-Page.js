export class TablesPage {

 static get navbar(){
        return cy.get('a#nav-title')
    }
  static get  getTitle(){
        return cy.xpath('//h1')
    }
    static get getTable1(){
        return cy.xpath('//table[@id="t01"]')
    }
    static get getTable2(){
        return cy.xpath('//table[@id="t02"]')
    }

    static get getUserForm(){
        return cy.xpath('//form[@id="form-textfield"]')
    }

    static get getFirstNameInput(){
        return cy.xpath('//input[@name="firstname"]')
    }

    static get getLastNameInput(){
        return cy.xpath('//input[@name="lastname"]')
    }

    static get getInputText(){
        return cy.xpath('//textarea')
    }

    static get getBreadcrumbTitle(){
        return cy.xpath('//div/h2[contains(text(),"Breadcrumb")]')
    }

    static get getBreadcrumbNav(){
        return cy.xpath('//nav[@aria-label="breadcrumb"]')
    }

    static get getBadgesBlock(){

    }

     static get getPaginationBlock(){

    }

    static get getTableBlock(){
        
    }

}

export const tablesPage = new TablesPage()