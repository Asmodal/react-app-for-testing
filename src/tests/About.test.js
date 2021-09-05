/* eslint-disable no-undef */
import { mount } from '@cypress/react';
import { About } from '../pages';

const title = 'About'
const subtitle = 'This is a single page app for testing purposes only.'

describe('About page component tests', () => {
  it('renders page correctly', () => {
    mount(<About />);
    cy.get('h3').contains(title).should('exist');
    cy.get('p').contains(subtitle).should('exist')
  });
})