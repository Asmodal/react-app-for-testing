/* eslint-disable no-undef */
import { mount } from '@cypress/react';
import { About } from '../pages';

//const title = 'Title of the form'

const title ='About'
it('check about word', () => {
  mount(<About />);
 // cy.get('h3').contains('About')
 cy.get('h3').contains(title).should('exist')
});