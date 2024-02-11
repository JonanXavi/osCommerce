import { faker } from '@faker-js/faker'

Cypress.Commands.add('search', (product) => {
    cy.section(`Producto: ${product}`)
    cy.step('Vamos al catálogo de productos')
    cy.get('img[title="Watch"]').click()
    cy.step('Seleccionamos el producto')
    cy.get(`img[title="${product}"]`).click()
    cy.get(`img[title="${product}"]`).should('exist')
})

Cypress.Commands.add('quantity', (number) => {
    cy.step('Agregamos el producto a la canasta')
    cy.get('[id="product-buttons"]').wait(2000).click()
    cy.get('[id="cart-form"]')
    cy.get('span[itemprop="price"]').first().then(($el) => {
        let valor = parseFloat($el.text()) * number
        cy.step('Modificamos la cantidad del producto')
        cy.get('input[class="qty-inp-s"]').wait(1500).clear().type(number)
        cy.get('input[class="qty-inp-s"]').should('have.attr', 'value', number)
        cy.get('span[itemprop="price"]').should('include.text', valor)
        cy.step('Guardamos el carrito de compras')
        cy.get('a[href="/watch/shopping-cart"]').click()
        cy.get('.btn-title').contains('Pay with card').click()
    })
})

Cypress.Commands.add('shipping', () => {
    cy.step('Ingresamos la información del envio')
    cy.get('[id="shipping_address-firstname"]').type(faker.person.firstName('male'))
    cy.get('[id="shipping_address-lastname"]').type(faker.person.lastName('male'))
    cy.get('[id="shipping_address-street_address"]').type(faker.location.streetAddress())
    cy.get('[id="shipping_address-postcode"]').type(faker.location.zipCode())
    cy.get('[id="shipping_address-city"]').type(faker.location.city())
    cy.get('[id="checkout-email_address"]').type(faker.internet.exampleEmail())
})

Cypress.Commands.add('checkout', (msn) => {
    cy.wait(1500)
    cy.step('Seleccionamos el método de pago')
    cy.get('input[name="payment"]').check()
    cy.get('input[name="payment"]').should('be.checked').wait(2000)
    cy.step('Finalizamos el proceso de compra')
    cy.get('[id="checkout-terms"]').check()
    cy.get('[id="checkout-terms"]').should('be.checked')
    cy.get('[id="box-31798"]').click()
    cy.step('Se genera la orden en la tienda')
    cy.get('[data-name="Html_box"]').should('exist')
    cy.get('.text-2').should('include.text', msn)
})