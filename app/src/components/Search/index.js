import React from 'react'
import styles from './styles.module.scss'

export default ({value, handleChange}) => (
    <div>
        <div onClick={() => {
            if (value) {
                // this.props.onSubmit(this.state.text)
            }
        }} className={styles.icon}>
        </div>
        <input type="text" className={styles.text} placeholder={value || 'Search'} value={value} onChange={handleChange} />
    </div>
)
