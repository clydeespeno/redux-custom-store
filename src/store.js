import {createStore} from 'redux'
import {combineReducers} from 'redux'
import preview from './reducer'

export default (initialState) =>
    createStore(combineReducers({preview}), initialState)
