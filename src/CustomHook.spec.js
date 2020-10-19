import React from 'react'
import { mount, mountHook } from 'cypress-react-unit-test'
import { useMultiplier } from './CustomHook'

describe('useMultiplier', () => {
  it('works by itself', () => {
    mountHook(() => useMultiplier({ initialNum: 1 })).then(hook => {
      expect(hook.current.num).to.equal(1)
      hook.current.multiply(5)
      expect(hook.current.num).to.equal(5)
      hook.current.multiply(7)
      expect(hook.current.num).to.equal(7)
    })
  })

  it('works inside a component', () => {
    let result = null;
    function Test() {
      result = useMultiplier({initialNum: 1});
      return <div>Result {result.num}</div>;
    }
    mount(<Test />)
    cy.contains('Result 1')
      .then(() => {
        result.multiply(4)
      })

    cy.contains('Result 4')
      .then(() => {
        expect(result.num).to.equal(4)
      })
  })
})
