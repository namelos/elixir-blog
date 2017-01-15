import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form/immutable'
export { increment, decrement } from './counter'
import { counter } from './counter'

export const reducer = combineReducers({ counter, form })