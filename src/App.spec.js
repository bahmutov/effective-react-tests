import React from 'react'
import { mount } from 'cypress-react-unit-test'
import App from './App'

describe('App', () => {
  it('works', () => {
    mount(<App />)
    cy.get('[type=submit]').should('be.disabled')
    cy.contains('label', 'Name').find('input').type('Gleb')
    cy.contains('h1', 'Welcome Gleb')
    cy.contains('label', 'Age').find('input[type=number]')
  })
})
