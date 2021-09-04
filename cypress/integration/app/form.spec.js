/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Snapshot test', () => {
    beforeEach(() => {
        cy.visit('localhost:3000');
    })
    it('Compares snapshot', () => {
        cy.get('form.form').matchImageSnapshot();
    })
})