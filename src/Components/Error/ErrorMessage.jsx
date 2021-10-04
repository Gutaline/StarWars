import React from 'react'
import S from './styles.module.css'

const ErrorMessage = () => {
    return (
        <div className = {S.error}>
            <div>Something went wrong!</div>
            <span>(Our dron fix it later)</span>
        </div>
    )
}

export default ErrorMessage
