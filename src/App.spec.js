import React from 'react'
import { mount } from 'cypress-react-unit-test'
import App from './App'

describe('App', () => {
  it('works', () => {
    mount(<App />)
    // submit should be disabled
    cy.get('input[type=submit]').should('be.disabled')
    // type name, and the
    cy.contains('label', 'Name:').find('input').type('Gleb')
    // welcome message should have that name
    cy.contains('h1', 'Welcome Gleb')
    // Age input should have type number
    cy.contains('label', 'Age:').find('input[type=number]')
  })
})
