import { combineReducers } from 'redux'
export { increment, decrement } from './counter'
import { counter } from './counter'

export const reducer = combineReducers({ counter })