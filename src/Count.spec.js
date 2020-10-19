import React from 'react'
import { mount } from 'cypress-react-unit-test'
import Count from './Count'
import { Provider } from 'react-redux'
import store from './store'

describe('Count', () => {
  it('redux component functionality', () => {
    // Count component runs as a full application
    // during the test. Thus we need to provide a store
    // just like a real application would do
    mount(
      <Provider store={store}>
        <Count />
      </Provider>
    )
    cy.contains('Current Count: 0')
    cy.contains('+').click()
    cy.contains('Current Count: 1')
    cy.contains('-').click().click()
    cy.contains('Current Count: -1')
    cy.wrap(store).invoke('getState').should('deep.equal', {count: -1})


    cy.contains('Reset').click()
    cy.contains('Current Count: 0')
  })
})
