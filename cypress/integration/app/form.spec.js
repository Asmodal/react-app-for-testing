/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Logowanie i bledne logowanie', () => {
    beforeEach(() => {
        cy.visit('localhost:3000');
    })
    it('Rejestracja użytkownika i sprawdzenie wielkości tabeli', () => {
        cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('Asdads')
        cy.get(':nth-child(4) > .MuiInputBase-root > .MuiInputBase-input').type('BBBasdf')
        cy.get(':nth-child(5) > .MuiInputBase-root > .MuiInputBase-input').type('asdfsd@asdfsd.pl')
        cy.get(':nth-child(6) > .MuiInputBase-root > .MuiInputBase-input').type('safsif')
        cy.get(':nth-child(7) > .MuiInputBase-root > .MuiInputBase-input').clear().type('4')
        cy.get(':nth-child(8) > .MuiInputBase-root > .MuiInputBase-input').type('asdfsdfasdasdfasdfsdfsf')
        cy.get('.MuiButton-label').click()
        cy.get('[href="/users"]').click()
        cy.get('ul > li').should('have.length', 3)
        
    })
    it('Brak rejestracji i sprawdzenie wielkości tabeli', () => {
        
        cy.get('[href="/users"]').click()
        cy.get('ul > li').should('have.length', 2)
        
    })

})