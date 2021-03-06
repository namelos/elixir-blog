import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { App, CounterApp, EditorApp } from '../view'

export const routes = <Route path="/" component={App}>
  <IndexRoute component={EditorApp} />
  <Route path="counter" component={CounterApp} />
</Route>