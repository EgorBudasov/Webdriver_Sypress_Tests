/// <reference types="Cypress" />

import HomePage from "../pages/Home-Page";

const homePage = new HomePage();

describe("home page test", () => {
  beforeEach(() => {
    homePage.openHomePage();
  });
  it("Slide Image Check", () => {
    homePage.clickImgToTheLeft().click();
    homePage.thirdImgShows();
    homePage.clickImgToTheRight().click();
    homePage.firstImgShows();
    homePage.getCaruselImage().click();
    homePage.secondImgShows();
  });
  it(`Who we are test `, () => {
    homePage.getWhoWeAreBlock();
    homePage.checkTextInWhoWeAre();
    homePage.getFindOutMoreButton().click();
    homePage.getFindOutMoreModalWindow().click();
  });
  it("Great Servise Test", () => {
    homePage.getGreatServiseBlock();
    homePage.checkTextInGreatService();
    homePage.checkStarInGreatService();
  });

  it("Why Choose Us Test", () => {
    homePage.getWhyChooseUsBlock();
    homePage.checkTextWhyChooseUs();
  });

  it("Excellent Customer Service Test", () => {
    homePage.getExcellentCustomerServiceBlock();
    homePage.checkTextInExcellentCustomerService();
    homePage.checkStarInExcellentCustomerService();
  });
  it("main Page Transfer link", () => {
    homePage.mainPageTransfer()
            .click()
            .url()
            .should("eq", "http://www.webdriveruniversity.com/index.html");
  });
  it("Our product transfer link", () => {
    homePage.ourProductsTransfer()
            .click()
            .url()
            .should("eq","http://www.webdriveruniversity.com/Page-Object-Model/products.html");
  });
  it("Contact Us transfer link", () => {
    homePage.contactUsTransfer()
            .click()
            .url()
            .should("eq", "http://www.webdriveruniversity.com/Contact-Us/contactus.html");
  });
});
