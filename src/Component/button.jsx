import React from 'react'
import '../style/header.css'

const Button = props => {
    return (
        <button className={"button" || props.className}{...props}>{props.children}</button>
    )
}


export default Button
