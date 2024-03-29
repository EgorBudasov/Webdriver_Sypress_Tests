/// <reference types="Cypress" />

import HomePage from "../pages/Home-Page";
import { HomePageSteps, homePageSteps } from "../steps/Home-Page-Steps";
const homePage = new HomePage();

describe("home page test", () => {
  beforeEach(() => {
    homePageSteps.openHomePage();
  });
  it("Slide Image Check", () => {
    homePageSteps.clickImgToTheLeftSteps();
    homePageSteps.thirdImgShowsSteps();
    homePageSteps.clickImgToTheRightSteps();
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
    homePage.getExcellentCustomerServiceBlock().should("have.text", "Excellent Customer Service!");
    homePage.getTextInExcellentCustomerService().should("not.be.empty");
    homePage
      .checkStarInExcellentCustomerService()
      .find("span")
      .should("have.length.at.least", 1)
      .should("have.length", 5);
  });
  it("main Page Transfer link", () => {
    homePage
      .mainPageTransfer()
      .trigger("mouseover")
      .should("have.css", "cursor", "pointer")
      .click()
      .url()
      .should("eq", "http://www.webdriveruniversity.com/index.html");
  });
  it("Our product transfer link", () => {
    homePage
      .ourProductsTransfer()
      .click()
      .url()
      .should(
        "eq",
        "http://www.webdriveruniversity.com/Page-Object-Model/products.html"
      );
  });
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
});
