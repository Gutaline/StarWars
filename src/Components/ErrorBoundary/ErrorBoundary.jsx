import React, { Component } from 'react'
import ErrorMessage from '../Error/ErrorMessage'

export default class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }
    render() {
        if(this.state.hasError) {
            return <ErrorMessage></ErrorMessage>
        }
        return this.props.children  
    }
}
