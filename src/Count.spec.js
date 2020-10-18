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
  })
})
