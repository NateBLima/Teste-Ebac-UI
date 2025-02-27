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

    it('Deve buscar um produto da lista com sucesso', () => {
        let product = 'Pierce Gym Short'
        productsPage.findProduct(product)
        cy.get('.product_title').should('contain', product)

    });

    it('Deve visitar a página do produto', () => {
        productsPage.visitProduct('Pierce Gym Short')
        cy.get('.product_title').should('contain', 'Pierce Gym Short')

    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 1
        productsPage.findProduct('Selene Yoga Hoodie')
        productsPage.addProductCart('XL', 'Purple', qtd)
        cy.get('.woocommerce-message').should('contain', ' foi adicionado no seu carrinho.')
    });

    it.only('Deve adicionar produto ao carrinho - buscando da massa de dados', () => {
        cy.fixture('products').then(dados => {

            productsPage.findProduct(dados[2].nameProduct)
            productsPage.addProductCart(
                dados[2].size, 
                dados[2].color, 
                dados[2].quantity)
            cy.get('.woocommerce-message').should('contain', dados[2].nameProduct)
        })
    });
});