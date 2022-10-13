import {Given,When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import SimplePage from '../PageObjects/SimplePage'

Given('User visits to the application', ()=>{
    SimplePage.loadHomePage()

})

When('User sees the title of the page {string}', title=>{
    SimplePage.getTitle(title)
})

Then('User clicks on dropdown option',()=>{
    cy.get('#dropdown-class-example').select('Selenium')
})

Then('User selects selenium option',()=>{
    cy.get('#dropdown-class-example').select('Selenium').should('have.value','option1')
})

Then('User clicks on {string}',option=>{
    SimplePage.radioOption(option)
})

Then('User sees selected option {string}',option=>{
    SimplePage.radioOption().check(option)
    .should('be.checked')
})

Then('User clicks on {string} checkbox' ,option=>{
    //SimplePage.checkboxOption().check(option)
    SimplePage.checkboxOption(option)
})

Then('User sees selected checkbox {string}' ,option=>{
    SimplePage.checkboxOption(option)
    .should('be.checked')
    //.should('have.class', 'checked')
})

When('User search {string} from dropdown' ,value=>{
    cy.get('input#autocomplete').type(value)
    cy.get('.ui-menu').find('.ui-menu-item .ui-menu-item-wrapper')
    .contains(value).click()
    //.select(value)
    //.should('have.value',value)
})

Then('User verifies searched value {string}' ,value=>{
    cy.get('input#autocomplete').should('have.value', value)
})

Then('User overs the mouse on button to see list' ,value=>{
    cy.get('.mouse-hover button').trigger('mousemove').find('.mouse-hover .mouse-hover-content')
    .contains('Top','Reload')
})

Then('User visit file upload URL' ,()=>{
    cy.forceVisit('https://www.filemail.com/share/upload-file')
    cy.url().should('include','/share/upload-file')
})

Then('User upload file' ,()=>{
    const file1 = 'Cypress-test-automation-framework.jpg'
    const file2 = 'cypressVSselenium.jpeg'
    cy.get("#addBtn [type='file']").attachFile([file1,file2])

    cy.get("#addBtn [type='file']")
    .attachFile({ filePath: file1, fileName: 'customFileName.json' });
    cy.get('[data-name="customFileName.json"]').should('include.text', 'customFileName.json')
})

Then('Read the file by using fixture' ,()=>{
    cy.fixture('example.json').then((data)=>{
        console.log(data)
        console.log(data.email)
    })
})

Then('Read th file by using readfile' ,()=>{
    cy.readFile('C:/Users/Pallavi/Documents/Cypress-POM-Cucumber/cypress/fixtures/example.json').then((data)=>{
        console.log(data.email)
    })
})

Then('Write the file' ,()=>{
    cy.writeFile('C:/Users/Pallavi/Documents/Cypress-POM-Cucumber/cypress/fixtures/sample.txt', 'Hello I am Pallavi Kadam\n')
    cy.writeFile('C:/Users/Pallavi/Documents/Cypress-POM-Cucumber/cypress/fixtures/sample.txt', 'From Sangli',{flag:'a+'})

})

Then('User download file', ()=>{
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg','MyCustomAgentName')
})

