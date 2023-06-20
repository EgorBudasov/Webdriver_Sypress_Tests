class contactUsPage{
    visit(){
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
       
    }

    getFirstName(){
        return cy.get ('input[name="first_name"]')
    }

    getLastName(){
        return cy.get('input[name="last_name"]')
    }

    getEmail(){
    return  cy.get('input[name="email"]')
    }

    getComment(){
        return cy.get('textarea[name="message"]')

    }

    getSubmitButton(){
        return cy.get('input[type="submit"]')
    }

    getResetButton(){
        return cy.get("#form_buttons").contains('RESET')
    }

    getContactUsHeader(){
      return cy.get('name = "contactme"')
    }


getSucsessSubmitMessage(){
  return cy.get("H1").should("have.text", "Thank You for your Message!");
}

    fillContactUsForm(user) {
        if (user.firsrName) {
         this.getFirstName().type(user.firsrName);
        }
        if (user.lastName) {
         this.getLastName().type(user.lastName);
        }
        if (user.email) {
          this.getEmail().type(user.email);
        }
        if (user.comment) {
          this.getComment().type(user.comment);
        }
       ;

        // if ('Thank You for your Message!'){
        //   cy.get("H1").should("have.text", "Thank You for your Message!");
        //   cy.log('good job')
        //   return;
        // }
      }
      getInvalidEmailErrorMessage(){
        return cy.get('body').should('contain','Error: Invalid email address')
      }
      
      getAllFieldsAreRequiredErrorMessage(){
        return cy.get('body').should('contain','Error: all fields are required')
      }
      getResetButton(){
        return cy.get('input[type="reset"]')
      }
}
 

export default contactUsPage;
