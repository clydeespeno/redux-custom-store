import {createStore} from 'redux'
import {combineReducers} from 'redux'
import reduce from 'lodash/reduce'
import has from 'lodash/has'

export default (schemas) => createStore(
    createReducers(schemas),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const createReducers = (schemas) => combineReducers(reduce(schemas, accumulateReducers, {}))

const accumulateReducers = (reducers, schema) => ({...reducers, [schema.id]: createReducer(schema)})

const createReducer = (schema) => {
    return (state = getDefault(schema), {type, response}) => {
        switch (type) {
            case `${schema.id}_GET_SUCCESS`:
                return {...state, [schema.id]: response}
            default:
                return state
        }
    }
}

const getDefault = (schema) => ({
    [schema.id]: getDefaultValue(schema)
})

const getDefaultValue = (schema) => {
    if (has(schema, 'defaultValue')) {
        return schema.defaultValue
    }

    switch (schema.type) {
        case 'array':
            return []
        case 'object':
            return {}
        default:
            return null
    }
}
