import HomePage from "../pages/Home-Page";


export class HomePageSteps{
    openHomePage() {
        cy.visit("http://www.webdriveruniversity.com/Page-Object-Model/index.html");
      }
      clickImgToTheLeftSteps(){
        HomePage.clickImgToTheLeft.should("be.visible")
        .trigger("mouseover")
        .should("have.css", "cursor", "pointer")
        .click();
      }
      thirdImgShowsSteps(){
        HomePage.thirdImgShows.should("be.visible")
      }
      clickImgToTheRightSteps(){
        HomePage.clickImgToTheRight.should("be.visible")
        .trigger("mouseover")
        .should("have.css", "cursor", "pointer")
        .click();
      }
} 



export const homePageSteps = new HomePageSteps;