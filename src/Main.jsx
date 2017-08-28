import React from 'react'
import {Provider} from 'react-redux'
import createStore from './store'
import PagePreview from './PagePreview'

const store = createStore()

export default class Main extends React.Component {

    render = () =>
        <Provider store={store}>
            <PagePreview/>
        </Provider>
}
