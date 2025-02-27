class ProductsPage {
    visitUrl() {
       cy.visit('produtos') 
    }
    findProduct(nameProduct) {
        cy.get('[name="s"]').eq(1).type(nameProduct)
        cy.get('.button-search').eq(1).click()
    }

    findProductList(nameProduct) {
        cy.get('.products > .row')
        .contains(nameProduct)
        .click()
    }

    visitProduct(nameProduct) {
        //cy.visit(`produtos/${nameProduct}`)
        const urlFormatada = nameProduct.replace(/ /g, '-')
        cy.visit(`produtos/${urlFormatada}`)
    }

    addProductCart(size, color, quantity) {
        cy.get('.button-variable-item-'+ size).click()
        cy.get(`.button-variable-item-${color}`).click()
        cy.get('.input-text').clear().type(quantity)
        cy.get('.single_add_to_cart_button').click()
        
    }
}

export default new ProductsPage()