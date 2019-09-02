import React from 'react'
import classnames from 'classnames'
import styles from './styles.module.scss'
import DropDown from '../DropDown';
import Search from '../Search';

export default ({ search, sort }) => (
    <div className={classnames( styles.header )}>
        <div>Blog</div>
        <div>
            <span>Sort:</span>
            <DropDown handleChange={sort.handleSortChange} value={sort.value}>
                {
                    sort.sortOptions.map( (option, index) => {
                        return <option key={`sort-option-${index}`} value={option.id}>{option.label}</option>
                    })
                }
            </DropDown>
        </div>
        <div>
            <span>Search:</span>
            <Search {...search}/>
        </div>
    </div>
)
