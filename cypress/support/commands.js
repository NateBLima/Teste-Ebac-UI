
Cypress.Commands.add('login', (username, password) => {
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('.woocommerce-form > .button').click()

})

Cypress.Commands.add('preCadastro', (username, password, nome, sobrenome) => {
    cy.get('#reg_email').type(username)
    cy.get('#reg_password').type(password)
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)
    cy.get('.woocommerce-Button').click()
})

Cypress.Commands.add('detalhesConta', (nome, sobrenome, usuario) =>{
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)
    cy.get('#account_display_name').type(usuario)
    cy.get('.woocommerce-Button').click()


})