// add to-do item and edit it
describe('Check item', () => {
    it('passes', () => {
        cy.visit('http://localhost:8080/')
        cy.get('#input').click().type('my second item')
        cy.get('#butAdd').click()
        cy.get('.to-do-item .item-left input').should('exist').check()
    })
  })