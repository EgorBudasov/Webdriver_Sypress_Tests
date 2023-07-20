class ContactUsPage{
  
    static get getFirstName(){
        return cy.xpath ('//input[@name="first_name"]')
      
    }

    static get getLastName(){
        return cy.xpath('//input[@name="last_name"]')
    }

    static get getEmail(){
    return  cy.xpath('//input[@name="email"]')
    }

    static get getComment(){
        return cy.xpath('//textarea[@name="message"]')

    }

    static get getSubmitButton(){
        return cy.xpath('//input[@type="submit"]')
    }

    static get getResetButton(){
        return cy.get("#form_buttons").contains('RESET')
    }

    static get getContactUsHeader(){
      return cy.get('name = "contactme"')
    }


    static get  getSucsessSubmitMessage(){
  return cy.get("H1").should("have.text", "Thank You for your Message!").and('exist');
}

    

        // if ('Thank You for your Message!'){
        //   cy.get("H1").should("have.text", "Thank You for your Message!");
        //   cy.log('good job')
        //   return;
        // }
     
      static get getInvalidEmailErrorMessage(){
        return cy.get('body').should('contain','Error: Invalid email address')
      }
      
      static get getAllFieldsAreRequiredErrorMessage(){
        return cy.get('body').should('contain','Error: all fields are required')
      }
      static get getResetButton(){
        return cy.xpath('//input[@type="reset"]')
      }
}
 

export default ContactUsPage;
