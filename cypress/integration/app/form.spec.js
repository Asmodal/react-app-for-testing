/* eslint-disable no-undef */
/// <reference types="cypress" />
describe('UserAdd', () => {
    beforeEach(() => {
        cy.visit('localhost:3000');
    })
    it('FalseUserAdd', () => {
        for (let i = 0; i < 5; i++) {
            cy.findAllByRole('textbox').eq(i).type("123")
          }
          cy.get('form > button').should('be.disabled')
    })
   it('Compares snapshot', () => {
       cy.get('form.MuiGrid-container').matchImageSnapshot();
   })
    it ('Test integracyjny', ()=> {
        cy.get('.MuiTextField-root > label').contains('name').siblings().type('Jan')
        cy.get('.MuiTextField-root > label').contains('surname').siblings().type('Kowalski')
        cy.get('.MuiTextField-root > label').contains('email').siblings().type('jan@kowalski.com')
        cy.get('.MuiTextField-root > label').contains('address').siblings().type('Katowice')
        cy.get('.MuiTextField-root > label').contains('level').siblings().clear()
        cy.get('.MuiTextField-root > label').contains('level').siblings().type('5')
        cy.get('.MuiTextField-root > label').contains('description').siblings().type('dzien dobry')
        cy.get("button[type='submit']").click()
        cy.get("a[href='/users']").click()
        cy.get('ul').should('exist')
        cy.get('ul').find('li').should('have.length', 3)
    })
    it('Brak rejestracji i sprawdzenie wielkości tabeli', () => {
        
        cy.get('[href="/users"]').click()
        cy.get('ul > li').should('have.length', 2)
        
    })

})