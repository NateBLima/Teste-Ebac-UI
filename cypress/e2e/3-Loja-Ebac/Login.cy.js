///<reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login',() =>{

    beforeEach(() => {
        cy.visit('minha-conta')
    });
    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso',() =>{   
        cy.get('#username'). type('cy.testes@testes.com')
        cy.get('#password'). type('@testes123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, Nathan.QA (não é Nathan.QA? Sair)')
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

    it('Deve fazer Login com sucesso - Usando Massa de Dados', () => {
        cy.get('#username'). type(perfil.usuario)
        cy.get('#password'). type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, Nathan.QA (não é Nathan.QA? Sair)')
            
    });

    it('Deve fazer Login com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then(dados =>{
            cy.get('#username'). type(dados.usuario , {log:false})
            cy.get('#password'). type(dados.senha , {log:false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, Nathan.QA (não é Nathan.QA? Sair)')                   
        })
         
    });

    it('Deve fazer login com sucesso - Usando comandos customizados',() =>{   
       cy.login('cy.testes@testes.com' , '@testes123')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, Nathan.QA (não é Nathan.QA? Sair)')
    })
})