///<reference types="cypress"/>

describe('Funcionalidade: Login',() =>{

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso',() =>{   
        cy.get('#username'). type('cy.testes@testes.com')
        cy.get('#password'). type('@testes123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, cy.testes (não é cy.testes? Sair)')
    })

    it('Deve inserir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username'). type('cy.testar@testes.com')
        cy.get('#password'). type('@testes123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain','Endereço de e-mail desconhecido.')
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username'). type('cy.testes@testes.com')
        cy.get('#password'). type('@testes1234')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain','Erro: A senha fornecida para o e-mail cy.testes@testes.com está incorreta')
        cy.get('.woocommerce-error').should('exist') 
        
    });
})