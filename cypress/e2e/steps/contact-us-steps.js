import ContactUsPage from "../pages/contact-Us-Page";

export class ContactUsStep{
    visit(){
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.url().should('include','contactus')
       
    }
    
    fillContactUsForm(user) {
        if (user.firstName) {
            ContactUsPage.getFirstName.type(user.firstName);
        }
        if (user.lastName) {
            ContactUsPage.getLastName.type(user.lastName);
        }
        if (user.email) {
            ContactUsPage.getEmail.type(user.email);
        }
        if (user.comment) {
          ContactUsPage.getComment.type(user.comment);
        }
        
       };

       verifyContactUsForm(user) {
        if (user.firstName) {
            ContactUsPage.getFirstName.should('have.value',user.firstName);
        }
        if (user.lastName) {
            ContactUsPage.getLastName.should('have.value',user.lastName);
        }
        if (user.email) {
            ContactUsPage.getEmail.should('have.value',user.email);
        }
        if (user.comment) {
          ContactUsPage.getComment.should('have.value',user.comment);
        }
     
       }
       submitContactUsForm(){
        ContactUsPage.getSubmitButton.click()
    };
}

export const contactUsStep = new ContactUsStep