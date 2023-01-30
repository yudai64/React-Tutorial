/// <reference types="Cypress" />
describe('Cypress Studio Demo', () => {
  it('X wins generated with Cypress Studio', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:3000');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-position="0"]').click();
    cy.get('[data-position="3"]').click();
    cy.get('[data-position="1"]').click();
    cy.get('[data-position="4"]').click();
    cy.get('[data-position="2"]').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-cy="game-status"]').should('have.text', 'Winner: X');
    /* ==== End Cypress Studio ==== */
  })

  it('Draw generated with Cypress Studio', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('localhost:3000');
    cy.get('[data-position="0"]').click();
    cy.get('[data-position="1"]').click();
    cy.get('[data-position="4"]').click();
    cy.get('[data-position="8"]').click();
    cy.get('[data-position="2"]').click();
    cy.get('[data-position="6"]').click();
    cy.get('[data-position="7"]').click();
    cy.get('[data-position="3"]').click();
    cy.get('[data-position="5"]').click();
    cy.get('[data-cy="game-status"]').should('have.text', 'Draw!');
    /* ==== End Cypress Studio ==== */
  })
})