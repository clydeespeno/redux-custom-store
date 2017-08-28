import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

export default function connectedComponent(store, dataDefinition) {

    class DataComponent extends React.Component {

        static propTypes = {
            id: PropTypes.string.isRequired,
            // eslint-disable-next-line react/forbid-prop-types
            data: PropTypes.any
        }

        static defaultProps = {
            data: null
        }

        render = () => {
            if (this.props.data) {
                // instead of rendering the component, we render data for now, just to show the problem is not with the
                // components
                return (<span>{`${JSON.stringify(this.props.data)}`}</span>)
            }
            return (<span>empty</span>)
        }

    }

    // eslint-disable-next-line react/no-multi-comp,react/display-name
    return (props) => {
        const ConnectedData = connect(mapStateToProps(dataDefinition.schema), {})(DataComponent)
        return (
            <ConnectedData {...props}
                           store={store}/>)
    }
}

// [schema][schema] is due to the first part of the array being the name of the reducer
// and the 2nd dimension property is the namespace to state
const mapStateToProps = (schema) => (state) => ({
    data: state[schema][schema]
})
