import { mount } from '@cypress/react';
import   { About } from '../pages';

const title = 'About'

it('renders learn react link', () => {
    mount(<About />)
    cy.get('div > h3').contains('About')
    cy.get('div > p').contains('This is a single page app for testing purposes only.')
  })

 