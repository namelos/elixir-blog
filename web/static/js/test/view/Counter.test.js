import test from 'ava'
import React from 'react'
import sinon from 'sinon'
import { shallow } from 'enzyme'

import { Counter } from '../../view/Counter'

test('should render counter state', t => {
  const wrapper = shallow(<Counter counter={1}/>)

  t.true(wrapper.contains(<div>counter: {1}</div>))
})

test('should render and trigger increment and decrement', t => {
  const increment = sinon.spy()
  const decrement = sinon.spy()

  const wrapper = shallow(<Counter counter={1} increment={increment} decrement={decrement} />)

  t.true(wrapper.contains(<button onClick={increment}>+</button>))
  t.true(wrapper.contains(<button onClick={decrement}>-</button>))

  wrapper.find('button').first().simulate('click')
  t.is(increment.callCount, 1)

  wrapper.find('button').last().simulate('click')
  t.is(decrement.callCount, 1)
})