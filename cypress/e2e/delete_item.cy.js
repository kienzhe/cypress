// add to-do item and delete it
describe('Delete item', () => {
    it('passes', () => {
        cy.visit('http://localhost:8080/')
        cy.get('#input').click().type('my second item')
        cy.get('#butAdd').click()
        cy.get('.to-do-item .item')
        cy.get('.fa-trash').click()
        cy.get('.to-do-item .item').should('not.exist')
    })
  })