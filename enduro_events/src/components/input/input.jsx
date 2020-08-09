import React, { Fragment } from 'react'

const Input = ({ id, title, value, onChange, type, minLength, maxLength }) => {
    return (
        <Fragment>
            <input type={type || 'text '} id={id} name={id} value={value} onChange={onChange}></input>
            <label htmlFor={id}>{title}</label>
        </Fragment>
    )
}

export default Input