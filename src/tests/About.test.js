/* eslint-disable no-undef */
import { mount } from '@cypress/react';
import { About } from '../pages';

it('First components tests', () => {
  mount(<About/>)
  cy.get('div#__cy_root > div > h3').contains('About').should('be.visible')
});