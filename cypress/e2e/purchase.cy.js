/// <reference types="Cypress" />
describe("Proceso de compra de productos", () => {
  beforeEach(function () {
    cy.visit("/")
    cy.fixture("productos").then(function (testdata) {
      this.testdata = testdata
    })
    cy.intercept({ resourceType: /xhr|new url|page load/ }, { log: false })
  })

  for (let i = 0; i <= 1; i++) {
    it("Mensaje de compra completada correcto", function () {
      cy.search(this.testdata.producto[i].nombre)
      cy.quantity(this.testdata.producto[i].cantidad)
      cy.shipping()
      cy.checkout('We\'ve received your order')
    })
  }

  it("Mensaje de compra completada incorrecto", function () {
    cy.search(this.testdata.producto[0].nombre)
    cy.quantity(this.testdata.producto[0].cantidad)
    cy.shipping()
    cy.checkout('We\'ve received order')
  })
})
