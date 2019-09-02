import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export default ({ search, sort }) => (
    <div className={classnames( styles.header )}>
        <Link to={'/'}>Blog</Link>
    </div>
)
