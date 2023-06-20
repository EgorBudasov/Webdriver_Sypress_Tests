/// <reference types="Cypress" />
import { users } from "../test-data/users-test-data";
import ContactUsPage from "../pages/contact-Us-Page"

const contactUsPage = new ContactUsPage();
const userWithValidData = users[0];
const userEmptyEmail = users[1];
const userWithoutFirstName = users[2];
const userWithAllEmptyFields = users[3]


describe("Contact US", () => {
   beforeEach(()=>{
    contactUsPage.visit()
   })
        it(`Open and fill in the Contact US form with test case name ${userWithValidData.testName}`, () => {
        
            contactUsPage.fillContactUsForm(userWithValidData)
            contactUsPage. getSubmitButton().click();
            contactUsPage.getSucsessSubmitMessage().should('exist')
            
          });
          it(`Open and fill in the Contact US form with test case name ${userEmptyEmail.testName}`, () => {
            
            contactUsPage.fillContactUsForm(userEmptyEmail)
            contactUsPage. getSubmitButton().click();
            contactUsPage.getInvalidEmailErrorMessage()
            
          });
          it(`Open and fill in the Contact US form with test case name ${userWithoutFirstName.testName}`, () => {
          
        
            contactUsPage.fillContactUsForm(userWithoutFirstName)
            contactUsPage.getSubmitButton().click();
            contactUsPage.getAllFieldsAreRequiredErrorMessage()
            
          });
          it(`Open  Contact US form without test data test case name ${userWithAllEmptyFields.testName}`,()=>{
            
            contactUsPage. getSubmitButton().click()
            contactUsPage.getAllFieldsAreRequiredErrorMessage()
            contactUsPage.getInvalidEmailErrorMessage()
          })
          it('check reset button in contact us page',()=>{
            contactUsPage.fillContactUsForm(userWithValidData);
            contactUsPage.getResetButton().click()
            contactUsPage.getFirstName().should('not.have.text')
          })
    })
пш

