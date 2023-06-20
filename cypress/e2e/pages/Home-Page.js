class HomePage {
  openHomePage() {
    cy.visit("http://www.webdriveruniversity.com/Page-Object-Model/index.html");
  }

  clickImgToTheLeft() {
    return cy
      .get('a[class="left carousel-control"]')
      .should("be.visible")
      .trigger("mouseover")
      .should("have.css", "cursor", "pointer");
  }
  thirdImgShows() {
    return cy.get(".active > #slide-image-3").should("be.visible");
  }

  clickImgToTheRight() {
    return cy
      .get('a[class="right carousel-control"]')
      .should("be.visible")
      .trigger("mouseover")
      .should("have.css", "cursor", "pointer");
  }
  firstImgShows() {
    return cy.get(".active > #slide-image-1").should("be.visible");
  }

  getCaruselImage(){
    return cy.get('[data-slide-to="1"]')
  }
  secondImgShows() {
    return cy.get(".active > #slide-image-1").should("be.visible");
  }

  getWhoWeAreBlock() {
    return cy
      .get(":nth-child(1) > .thumbnail > .section-title > .sub-heading")
      .should("have.text", "Who Are We?");
  }
  checkTextInWhoWeAre() {
    return cy
      .get(":nth-child(1) > .thumbnail > .caption > p")
      .should("not.be.empty");
  }
  getFindOutMoreButton() {
    return cy
      .get('[class="btn btn-secondary center-block"]')
      .trigger("mouseover")
      .should("have.css", "cursor", "pointer");
  }

  getFindOutMoreModalWindow(){
    return cy.get('div[class="modal-content"]')
             .should('contain','Welcome to webdriveruniversity.com')
             .contains('Close')
  }

  getGreatServiseBlock() {
    return cy.contains("GREAT SERVICE!").should("have.text", "GREAT SERVICE!");
  }
  checkTextInGreatService() {
    return cy
      .get(":nth-child(2) > .thumbnail > .caption > p")
      .should("not.be.empty");
  }
  checkStarInGreatService(){
    return cy.get(':nth-child(2) > .thumbnail > .caption > .div-star ')
    .find('span')
    .should('have.length.at.least',1)
    .should('have.length',5)
  }
  getWhyChooseUsBlock() {
    return cy.contains("Why Choose Us?").should("have.text", "Why Choose Us?");
  }
  checkTextWhyChooseUs() {
    return cy
      .get(":nth-child(3) > .thumbnail > .caption > p")
      .should("not.be.empty");
  }

  getExcellentCustomerServiceBlock() {
    return cy.contains("Excellent Customer Service!")
  }
  getTextInExcellentCustomerService() {
    return cy
      .get(":nth-child(4) > .thumbnail > .caption > p")
      
  }
  checkStarInExcellentCustomerService(){
    return cy.get(':nth-child(4) > .thumbnail > .caption > .div-star ')
    
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
