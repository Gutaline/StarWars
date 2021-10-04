import React from 'react'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

import yoda from '../../img/yoda.png'
import S from './styles.module.css'

function Welcome() {
    return (
        <ErrorBoundary>
        <div className = {S.welcome}>
                <div>
                    <h2>Welcome</h2>
                    <p>Start using the application by clicking on the section of interest in the navigation bar</p>
                </div>
                <div>
                    <img src={yoda} alt="" />
                </div>
        </div>
            
        
        </ErrorBoundary>
    )
}

export default Welcome
