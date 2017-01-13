import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './model'
import { CounterApp } from './view'

const store = createStore(reducer)

export default () => <Provider store={store}>
  <CounterApp />
</Provider>
