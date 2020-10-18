/// <reference types="cypress" />
import React from 'react'
import Form from './Form'
import { mount } from 'cypress-react-unit-test'
import * as api from './api'

describe('Form', () => {
  it('calls the api method to submit the form', () => {
    mount(<Form />)
    cy.contains('label', 'Body:').find('input').type('Sample{enter}')
    cy.contains('h1', 'Successfully Created Post!!')
  })

  it('stubs the api method', () => {
    mount(<Form />)
    cy.stub(api, 'postProducts').as('postProducts')
    cy.contains('label', 'Body:').find('input').type('Sample{enter}')
    cy.get('@postProducts').should('have.been.calledOnce')
      .its('args.0').should('deep.equal', ['Sample'])
  })

  it('stubs the window.fetch method', () => {
    mount(<Form />)
    cy.stub(window, 'fetch').as('fetch')
    cy.contains('label', 'Body:').find('input').type('Sample{enter}')
    cy.get('@fetch').should('have.been.calledOnce')
      .its('args.0').should('deep.equal', ['https://reqres.in/api/products', {
        body: '{"title":"Sample"}',
        method: "POST",
        headers: {
          'Content-Type': "application/json",
        }
      }])
  })

  it('observes the network call', () => {
    mount(<Form />)
    cy.route2('POST', 'https://reqres.in/api/products', {}).as('submit')
    cy.contains('label', 'Body:').find('input').type('Sample{enter}')
    cy.wait('@submit')
  })
})
