import loginPage from '../pages/login'
import homePage from '../pages/home'

describe('Login test scenario', () => {

    beforeEach(() =>{
      cy.visit('/signin')
    })

    it('Login with valid credentials', () => {
      loginPage.enterEmail(Cypress.env('user'))
      loginPage.enterPassword(Cypress.env('password'))
      loginPage.clickSignIn()
      homePage.continueToWorkspace()
      homePage.checkLogIn()
    })

    it('Login with non-existing email', () => {
      loginPage.enterEmail("test@antonio.com")
      loginPage.enterPassword(Cypress.env('password'))
      loginPage.clickSignIn()
      loginPage.elements.invalidCredentialsText().should('be.visible')

    })

    it('Login with invalid password', () => {
      loginPage.enterEmail(Cypress.env('user'))
      loginPage.enterPassword("12345678")
      loginPage.clickSignIn()
      loginPage.elements.invalidCredentialsText().should('be.visible')

    })

    it('Login with empty credentials', () => {
      loginPage.clickSignIn()
      loginPage.elements.blankEmailText().should('be.visible')
      loginPage.elements.blankPasswordText().should('be.visible')
    })

    it('Check invalid email format', () => {
      loginPage.enterEmail("test.com")
      loginPage.elements.passwordInput().click()
      loginPage.elements.invalidEmailText().should('be.visible')
    })

    it('Check email with more than expected characters', () => {
      loginPage.enterEmail("fdasfasdfasfasdfaddafsdfasfdsadfsafsdssasssdfadddsdffasadsfadsda@test.com")
      loginPage.enterPassword(Cypress.env('password'))
      loginPage.clickSignIn()
      loginPage.elements.invalidInputArguments().should('be.visible')
    })

    it('Show password', () => {
      loginPage.enterPassword("12345678")
      loginPage.elements.passwordInput().should('have.attr', 'type').and('equal','password')
      loginPage.showPassword()
      loginPage.elements.passwordInput().should('have.attr', 'type').and('equal','text')
    })
})
  