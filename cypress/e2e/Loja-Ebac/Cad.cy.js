///<reference types="cypress"/>
import { faker } from "@faker-js/faker";
describe('Funcionalidade: Cadastro', () =>{

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve completar o cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('testes@123')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('exist')
    })

    it('Deve completar o cadastro com sucesso - usando variáveis', () => {
        var email = faker.internet.email()
        var name = faker.person.firstName()
        var lName = faker.person.lastName()

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('testes@123')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(name)
        cy.get('#account_last_name').type(lName)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('exist')
    });

    it.only('Deve completar o cadastro com sucesso - usando comando customizado', () => {
        cy.preCadastro(faker.internet.email(), 'testes@123', faker.person.firstName(), faker.person.lastName())
        cy.get('.woocommerce-message').should('exist')        
    });
});
