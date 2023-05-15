describe('Empty should not be added', () => {
    it('passes', () => {
      cy.visit('http://localhost:8080/')
      cy.get('#input').click().type(' ')
      cy.get('#butAdd').click()
      cy.get('.to-do-item .item').should('not.exist')
    })
  })