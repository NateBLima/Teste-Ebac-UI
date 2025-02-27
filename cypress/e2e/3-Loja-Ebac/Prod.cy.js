///<reference types="cypress"/>
import productsPage from "../../support/page-objects/products.page";

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        productsPage.visitUrl()
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        productsPage.findProductList('Apollo Running Short')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')


        
    });

    it.only('Deve buscar um produto da lista com sucesso', () => {
        let product = 'Pierce Gym Short'
        productsPage.findProduct(product)
        cy.get('.product_title').should('contain', product)

    });

    it('Deve visitar a página do produto', () => {
        
    });

    it('Deve adicionar produto ao carrinho', () => {
        
    });
});