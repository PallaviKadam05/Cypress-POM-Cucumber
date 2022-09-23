import { expect } from "chai"

class SimplePage{
    static loadHomePage(){
        cy.visit('https://codenboxautomationlab.com/practice/')
        cy.url().should('include','/practice')
    }
    static getTitle(title){
        cy.get('.page-title').invoke('text').then((text1)=>{
            expect(text1.trim()).to.equal(title)
        })
    }
    static radioOption(radioOption){
        cy.get('[type="radio"]').check(radioOption)
    }
    static checkboxOption(option){
        cy.get('[type="checkbox"]').check(option)
    }
}
export default SimplePage