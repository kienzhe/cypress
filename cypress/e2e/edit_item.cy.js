// add to-do item and edit it
describe('Edit item', () => {
    it('passes', () => {
        cy.visit('http://localhost:8080/')
        cy.get('#input').click().type('my second item')
        cy.get('#butAdd').click()
        cy.get('.to-do-item .item').should('exist')
        cy.get('.fa-edit').click()
        cy.get('.to-do-item .item').type('{selectAll}my edited item {enter}')
    })
  })