/// <reference types="Cypress" />
import OurProductsPage from "../pages/Our-Products-Page"
import HomePage from "../pages/Home-Page"
const ourProduct = new OurProductsPage
const homePage = new HomePage();

describe('Our Products ',() =>{
    beforeEach(()=>{
        ourProduct.openPage()
    })
    it('check Special Offers title  color',()=>{
        ourProduct.getSpecialOffersTitle().should('have.css','color','rgb(244, 89, 80)').and('contain','Special Offers')
    })
    it('check Special Offers modal window',()=>{
        ourProduct.getSpecialOffers().click()
        ourProduct.getSpecialOffersModal().should('contain.text','SPECIAL OFFER! - GET 30% OFF YOUR FIRST ORDER AT ').should('be.visible')
        ourProduct.getModalWindowCloseButton().should('be.enabled').click()
    })
    it('check the number of modal windows',() =>{
        ourProduct.getAllModals().should('have.length',8)
    })
    it("Our product transfer link", () => {
        homePage
          .ourProductsTransfer()
          .click()
          .url()
          .should(
            "eq",
            "http://www.webdriveruniversity.com/Page-Object-Model/products.html"
          );
})
it("Contact Us transfer link", () => {
    homePage
      .contactUsTransfer()
      .click()
      .url()
      .should(
        "eq",
        "http://www.webdriveruniversity.com/Contact-Us/contactus.html"
      );
  });
  it('check that navbar has 3 referense',()=>{
    ourProduct.getNavBarReferenceNumber().children().should('have.length',3)
  })
})