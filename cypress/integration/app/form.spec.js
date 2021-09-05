/* eslint-disable no-undef */
/// <reference types="cypress" />

import { forEach } from "lodash";

describe('UserAdd', () => {
    beforeEach(() => {
        cy.visit('localhost:3000');
    })
    it('UserAdd', () => {
        cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type("tester")
        cy.get(':nth-child(4) > .MuiInputBase-root > .MuiInputBase-input').type("tester")
        cy.get(':nth-child(5) > .MuiInputBase-root > .MuiInputBase-input').type("tester@test.pl")
        cy.get('form > button').click()
        cy.visit("http://localhost:3000/users")
        cy.get('div > h6 + ul > :nth-child(2)').should('be.visible')
    })
    it('FalseUserAdd', () => {
        for (let i = 0; i < 5; i++) {
            cy.findAllByRole('textbox').eq(i).type("123")
          }
          cy.get('form > button').should('be.disabled')
    })
})