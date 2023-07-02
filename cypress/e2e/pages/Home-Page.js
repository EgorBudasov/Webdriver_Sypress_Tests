class HomePage {
  openHomePage() {
    cy.visit("http://www.webdriveruniversity.com/Page-Object-Model/index.html");
  }

  clickImgToTheLeft() {
    return cy
      .xpath('//a[@class="left carousel-control"]')
      .should("be.visible")
      .trigger("mouseover")
      .should("have.css", "cursor", "pointer");
  }
  thirdImgShows() {
    return cy.get(" #slide-image-3").should("be.visible");
  }

  clickImgToTheRight() {
    return cy
      .xpath('//a[@class="right carousel-control"]')
      .should("be.visible")
      .trigger("mouseover")
      .should("have.css", "cursor", "pointer");
  }
  firstImgShows() {
    return cy.xpath('//*[@id="slide-image-1"]').should("be.visible");
  }

  getCaruselImage(){
    return cy.xpath('//li[@data-slide-to="1"]')
  }
  secondImgShows() {
    return cy.xpath('//*[@id="slide-image-1"]').should("be.visible");
  }

  getWhoWeAreBlock() {
    return cy
      .xpath('//p[@class="sub-heading"][contains(text(),"Who Are We?")]')
      .should("have.text", "Who Are We?");
  }
  checkTextInWhoWeAre() {
    return cy
      .xpath("//div[@class='caption']").eq(0).find('p')
      .should("not.be.empty");
  }
  getFindOutMoreButton() {
    return cy
      .xpath('//button/b[contains(text(), "Find Out More!")]')
      .trigger("mouseover")
      .should("have.css", "cursor", "pointer");
  }

  getFindOutMoreModalWindow(){
    return cy.xpath('//div[@class="modal-content"]')
             .should('contain','Welcome to webdriveruniversity.com')
             .contains('Close')
  }

  getGreatServiseBlock() {
    return cy.contains("GREAT SERVICE!").should("have.text", "GREAT SERVICE!");
  }
  checkTextInGreatService() {
    return cy
      .get("div[class='caption']").eq(1).children()
      .should("not.be.empty");
  }
  checkStarInGreatService(){
    return cy.get('.div-star').eq(0)
    .find('span')
    .should('have.length.at.least',1)
    .should('have.length',5)
  }
  getWhyChooseUsBlock() {
    return cy.contains("Why Choose Us?").should("have.text", "Why Choose Us?");
  }
  checkTextWhyChooseUs() {
    return cy
      .xpath("//div[@class='caption']").eq(2).children()
      .should("not.be.empty");
  }

  getExcellentCustomerServiceBlock() {
    return cy.contains("Excellent Customer Service!")
  }
  getTextInExcellentCustomerService() {
    return cy
      .get("div[class='caption']").eq(3).children()
      
  }
  checkStarInExcellentCustomerService(){
    return cy.get('.div-star').eq(1)
  }
  mainPageTransfer() {
    return cy
      .get('a[class="navbar-brand"]')
      
    //ссылка ведет на главную страницу а название неправильное.баг?

  }
  ourProductsTransfer(){
    return cy.contains('Our Products')
  }
  contactUsTransfer(){
    return cy.contains('Contact Us')
  }
}

export default HomePage;
