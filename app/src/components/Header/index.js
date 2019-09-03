import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import { IoIosHome } from 'react-icons/io'; 

export default ({ search, sort }) => (
    <div className={classnames( styles.header )}>
        <Link to={'/'}><h2><IoIosHome size={25} />Adriaan Balt's Blog</h2></Link>
    </div>
)
