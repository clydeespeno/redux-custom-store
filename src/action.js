export const loadPage = (application, pageSlug) => ({
    type: 'LOAD_PAGE',
    response: {
        components: [{
            id: 'body',
            class: 'div',
            data: {
                repeat: true,
                schema: 'todo'
            }
        }],
        schemas: [{
            id: 'todo',
            type: 'array',
            defaultValue: null
        }]
    }
})
