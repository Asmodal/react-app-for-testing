import { mount } from '@cypress/react';
import   { About } from '../pages';

const title = 'About'

it('renders learn react link', () => {
    mount(<About />)
    cy.get('div > h3').contains('About').should('be.visible')
    cy.get('div > p').contains('This is a single page app for testing purposes only.').should('be.visible')
  })

 