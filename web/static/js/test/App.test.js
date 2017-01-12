import test from 'ava'
import React from 'react'
import {renderJSX, JSX} from 'jsx-test-helpers'
import {shallow} from 'enzyme'

import App from '../App'

test('truth', t => t.true(true))

test('App render to string', t => {
  const actual = renderJSX(<App />)
  const expected = JSX(<div>Hello world!</div>)
  t.is(actual, expected)
})

test('App shallow render', t => {
  const wrapper = shallow(<App />)
  t.true(wrapper.contains(<div>Hello world!</div>))
})
