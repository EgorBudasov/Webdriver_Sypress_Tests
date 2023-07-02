class OurProductsPage {
    openPage(){
        cy.visit('http://www.webdriveruniversity.com/Page-Object-Model/products.html')
    }
    getSpecialOffers(){
    return  cy.xpath('//div[@id="container-special-offers"]')
    }
    getSpecialOffersTitle(){
        return cy.xpath('//p[contains(text(),"Special Offers")]')
    }
    getSpecialOffersModal(){
        return  cy.xpath('//div[@class="modal-dialog modal-md"]')
    }
    getModalWindowCloseButton(){
        return cy.contains('Close')
    }

    getAllModals(){
        return cy.xpath('//div[@data-target="#myModal"]')
    }
    getNavBarReferenceNumber(){
        return cy.get('ul')
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