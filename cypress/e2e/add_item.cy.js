// add to-do item
describe('Add new project', () => {
    it('passes', () => {
        cy.visit('http://localhost:8080/')
        cy.get('#input').click().type('my cypress item')
        cy.get('#butAdd').click()
        cy.get('.to-do-item .item').should('exist')
    })
})