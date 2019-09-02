import React from 'react'
import styles from './styles.module.scss'

export default ({ children, value, handleChange }) => (
    <div className={styles.DropDown}>
        <select value={value} onChange={ (e) => handleChange( e.target.value )}>
            { children }
        </select>
    </div>
)
