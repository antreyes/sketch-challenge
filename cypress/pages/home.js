class HomePage {
    elements = {
        continueWorkspace: () => cy.contains('Continue to Workspace', { timeout: 10000 }),
        userAvatarButton: () => cy.get('[data-testid="user-avatar"]')
    }

    continueToWorkspace () {
        this.elements.continueWorkspace().should('be.visible')
        this.elements.continueWorkspace().click()
    }

    checkLogIn() {
        this.elements.userAvatarButton().should('be.visible')
    }
}

module.exports = new HomePage()


