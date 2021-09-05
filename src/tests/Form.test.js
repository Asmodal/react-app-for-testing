/* eslint-disable no-undef */
import { mount } from '@cypress/react';
import { Form } from '../components';

const title = 'Title of the form'

it('renders learn react link', () => {
  mount(<Form title={title} />);
  cy.get('form').contains(title);

});
it('renders correct number of fields', () => {
  mount(<Form />);
  cy.get('form label + div').should('have.length', 6)
});
it('renders a submit button', () => {
  mount(<Form />);
  cy.get('button[type="submit"]').should('exist')
});