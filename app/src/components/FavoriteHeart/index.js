import React from 'react'
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import styles from './styles.module.scss'

export default ({ toggleFavorite, favorite, id, size }) => (
    <div className={styles.favoriteContainer} onClick={() => toggleFavorite(id)}>
        {
            !favorite
            &&
            <IoIosHeartEmpty size={size} />
        }
        {
            favorite
            &&
            <IoIosHeart size={size} />
        }
    </div>
)
