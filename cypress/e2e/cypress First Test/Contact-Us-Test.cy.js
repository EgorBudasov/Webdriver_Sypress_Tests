/// <reference types="Cypress" />
import { users } from "../test-data/users-test-data";
import ContactUsPage from "../pages/contact-Us-Page"

const contactUsPage = new ContactUsPage();
const userWithValidData = users[0];
const userEmptyEmail = users[1];
const userWithoutFirstName = users[2];
const userWithAllEmptyFields = users[3]


describe("Contact US", () => {
   
        it(`Open and fill in the Contact US form with test case name ${userWithValidData.testName}`, () => {
            contactUsPage.visit()
            cy.get("#contact-us").invoke("removeAttr", "target").click();
            contactUsPage.fillContactUsForm(userWithValidData);
            contactUsPage.getSucsessSubmitMessage().should('exist')
            
          });
          it(`Open and fill in the Contact US form with test case name ${userEmptyEmail.testName}`, () => {
            contactUsPage.visit()
            cy.get("#contact-us").invoke("removeAttr", "target").click();
            contactUsPage.fillContactUsForm(userEmptyEmail);
            contactUsPage.getInvalidEmailErrorMessage()
            
          });
          it(`Open and fill in the Contact US form with test case name ${userWithoutFirstName.testName}`, () => {
            contactUsPage.visit()
            cy.get("#contact-us").invoke("removeAttr", "target").click();
            contactUsPage.fillContactUsForm(userWithoutFirstName);
            contactUsPage.getAllFieldsAreRequiredErrorMessage()
            
          });
          it.only(`Open  Contact US form without test data test case name ${userWithAllEmptyFields.testName}`,()=>{
            contactUsPage.visit()
            contactUsPage. getSubmitButton().click()
            contactUsPage.getAllFieldsAreRequiredErrorMessage()
            contactUsPage.getInvalidEmailErrorMessage()
          })
    })


