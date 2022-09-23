class LoginPage{
    constructor(){
        this.email = '#username'
    }

    get UserName(){
        return cy.get(this.email)
    }

    get PassWord(){
        return cy.get('#password')
    }

    get SubmitButton(){
        return cy.get('.woocommerce-form-login__submit')
    }
}
const loginPage = new LoginPage();
export default loginPage
