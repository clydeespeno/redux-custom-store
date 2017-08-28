import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'
import connectedComponent from './connectedComponent'
import * as action from './action'
import providePageStore from './providePageStore'

@connect((state) => ({
    page: state.preview.page,
    schemas: state.preview.schemas,
}), action)
export default class PagePreview extends React.Component {

    static propTypes = {
        page: PropTypes.object.isRequired,
        schemas: PropTypes.array.isRequired,
        loadPage: PropTypes.func.isRequired
    }

    componentWillMount = () =>
        this.props.loadPage()

    render = () => {
        if (!isEmpty(this.props.page.components)) {
            const store = providePageStore(this.props.schemas)
            window.pagePreviewStore = store
            return (
                <div>
                    {this.renderPageComponents(this.props.page.components, store)[0]}
                </div>)
        }
        return null
    }

    renderPageComponents = (components, store) => {
        const recursor = (components) => map(components, c => {
            return this.renderPageComponent(c, recursor(c.children), store)
        })
        return recursor(components)
    }

    renderPageComponent = (component, children, store) => {
        return this.renderComponent(
            {key: component.id, id: component.id},
            children,
            store,
            component.data
        )
    }

    renderComponent = (props, children, store, data) => {
        const ConnectedComponent = connectedComponent(store, data)
        return <ConnectedComponent {...props}/>
    }
}
