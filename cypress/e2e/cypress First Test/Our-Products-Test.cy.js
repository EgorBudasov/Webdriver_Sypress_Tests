/// <reference types="Cypress" />
import OurProductsPage from "../pages/Our-Products-Page"
const ourProduct = new OurProductsPage

describe('Our Products ',() =>{
    it('',()=>{
        ourProduct.openPage()
       // ourProduct.getSpecialOffers()//.click()
        ourProduct.getSpecialOffersTitle().should('have.css','color','rgb(244,89,80)')
    })
})