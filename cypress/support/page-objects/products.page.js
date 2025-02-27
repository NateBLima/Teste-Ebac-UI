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

    visitProduct() {
        //code
    }

    addProductCart() {
        //code
    }
}

export default new ProductsPage()