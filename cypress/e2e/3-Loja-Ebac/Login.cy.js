///<reference types="cypress"/>

describe('Funcionalidade: Login',() =>{

    it('Deve fazer login com sucesso',() =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username'). type('cy.testes@testes.com')
        cy.get('#password'). type('@testes123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, cy.testes (não é cy.testes? Sair)')
    })
})