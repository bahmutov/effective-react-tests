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
    cy.stub(api, 'postProducts').resolves({ok: true}).as('postProducts')
    cy.contains('label', 'Body:').find('input').type('Sample{enter}')
    cy.get('@postProducts').should('have.been.calledOnce')
      .its('args.0').should('deep.equal', ['Sample'])
  })

  it('stubs the window.fetch method', () => {
    mount(<Form />)
    cy.stub(window, 'fetch').resolves({ok: true}).as('fetch')
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

  // hmm, seems to not work due to second domain,
  // but I got it to pass at least once...
  it.skip('observes the network call', () => {
    mount(<Form />)
    cy.route2({
      method: 'POST',
      url: 'https://reqres.in/api/products'
    }, (req) => {
      console.log('post')
      req.reply({
        headers: {
          'access-control-allow-origin': '*'
        },
        body: {
          ok: true
        }
      })
    }).as('submit')
    cy.contains('label', 'Body:').find('input').type('Sample{enter}')
    cy.wait('@submit')
  })
})
