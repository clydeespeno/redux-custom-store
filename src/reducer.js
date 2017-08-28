export const defaultState = () => ({
    page: {},
    schemas: []
})

export default (state = defaultState(), {type, response}) => {
    switch (type) {
        case 'LOAD_PAGE':
            return updatePage(state, response)
        default:
            return state
    }
}

const updatePage = (state, response) => {
    const {schemas, ...page} = response
    return {...state, page, schemas}
}
