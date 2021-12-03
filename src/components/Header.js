import PropTypes from 'prop-types'
import React from 'react'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {

    const location = useLocation()
    return(
        <header className='header'>
            <h1 style={headingStyle}>{title}</h1>
            {location.pathname === '/' && 
            (<Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close Add Photo' : 'Show Add Photo'}
                onClick={onAdd} />
            )}
            <img src="https://www.ryerson.ca/content/dam/brand/global/images/visual-guide/universitylogo-full-colour.jpg" width='50%' height='50%'/>
        </header>

    )
}

Header.defaultProps = {
    title: 'Photo Bank',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'black',
    backgroundColor: ''
}

export default Header