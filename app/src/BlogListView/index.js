import React from 'react';
import { Link } from 'react-router-dom'
import styles from './style.module.scss';

function App() {
    return (
        <div className={styles["BlogListView"]}>
            <h1>Blog List View</h1>
            <Link to="/details/2">Go to details</Link>
        </div>
    );
}

export default App;
