class LoginPage {
    elements = {
        emailInput: () => cy.get('[id="text-input"]'),
        passwordInput: () => cy.get('[id="password-input"]'),
        signInButton: () => cy.get('[type="submit"]'),
        eyeIconButton: () => cy.get('[data-testid="eye-icon"]'),
        blankEmailText: () => cy.contains('Email can’t be blank'),
        blankPasswordText: () => cy.contains('Password can’t be blank'),
        invalidEmailText: () => cy.contains('This is not a valid email'),
        invalidInputArguments: () => cy.contains('Invalid input arguments'),
        invalidCredentialsText: () => cy.contains('We couldn’t sign you in. Please check your details and try again.')
    }

    enterEmail (email) {
        this.elements.emailInput().type(email)
    }

    enterPassword (password) {
        this.elements.passwordInput().type(password)
    }

    clickSignIn () {
        this.elements.signInButton().click()
    }

    showPassword () {
        this.elements.eyeIconButton().click()
    }
}

module.exports = new LoginPage()


