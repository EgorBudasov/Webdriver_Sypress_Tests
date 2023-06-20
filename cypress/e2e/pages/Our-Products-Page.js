class OurProductsPage {
    openPage(){
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/products.html')
    }
    getSpecialOffers(){
    return  cy.get('#container-special-offers')
    }
    getSpecialOffersTitle(){
        return cy.get('#container-special-offers > .section-title > .sub-heading')
    }
    getCameras(){
        return 
    }
    getNeewLaptops(){
        return 
    }
    getUsedLaptops(){
        return 
    }
    getGameConsols(){
        return 
    }
    getComponents(){
        return 
    }
    getDesktopSystems(){
        return 
    }
    getAudio(){
        return 
    }
}
export default OurProductsPage