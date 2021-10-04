import React, { Component } from 'react'
import S from './styles.module.css';

export default class ErrorButton extends Component {
    state = {
        renderError: false
    };

    render() {
        if (this.state.renderError) {
            this.foo.bar = 0;
        }

        return (
          <button
            className={S.error}
            onClick={() => this.setState({renderError: true})}>
            Throw Error
          </button>
        )
    }
}

