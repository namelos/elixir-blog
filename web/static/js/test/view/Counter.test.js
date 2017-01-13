import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'

import { Counter } from '../../view/Counter'

test('should render counter state', t => {
  const wrapper = shallow(<Counter counter={1}/>)
  t.true(wrapper.text().includes('counter: 1'))
})
