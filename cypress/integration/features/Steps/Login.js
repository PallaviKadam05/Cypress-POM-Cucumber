import {Given,When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import loginPage from '../PageObjects/LoginPage'


Given('User visits the page', ()=>{
    cy.visit('https://shop.demoqa.com/my-account/')
    cy.url().should('include','/my-account')

})

Then('User enters username {string} and password {string}', (uname , pass) => {
    cy.enterText('#username', uname)
    //loginPage.UserName.type(uname)
    loginPage.PassWord.type(pass)
    loginPage.SubmitButton.click()
})
