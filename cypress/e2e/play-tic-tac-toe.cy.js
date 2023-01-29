/// <reference types="Cypress" />
describe('tic-tac-toe', () => {
	it('X wins', () => {
		cy.visit('/')

		cy.get('[data-position=0]').click()
		cy.get('[data-position=3]').click()
		cy.get('[data-position=1]').click()
		cy.get('[data-position=4]').click()
		cy.get('[data-position=2]').click()

		cy.get('[data-cy="game-status"]').should('contain', 'Winner: X')
	})

	it('Draw', () => {
		cy.visit('/')

		cy.get('[data-position=0]').click()
		cy.get('[data-position=1]').click()
		cy.get('[data-position=4]').click()
		cy.get('[data-position=8]').click()
		cy.get('[data-position=2]').click()
		cy.get('[data-position=6]').click()
		cy.get('[data-position=7]').click()
		cy.get('[data-position=3]').click()
		cy.get('[data-position=5]').click()

		cy.get('[data-cy="game-status"]').should('contain', 'Draw!')
		cy.get('[data-cy="game-status"]').should('not.contain', 'Winner')
	})
})