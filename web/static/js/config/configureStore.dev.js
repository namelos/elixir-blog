import { createStore } from 'redux'
import { reducer } from '../model'
import { DevTools } from './DevTools'

export const configureStore = initialState => createStore(
  reducer,
  initialState,
  DevTools.instrument()
)
