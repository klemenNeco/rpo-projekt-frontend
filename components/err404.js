import React from 'react';
import styles from './err.module.css';

const Err404 = () => {
    return (
        <div className={styles.box}>
            <h2 className={styles.errNo}>404</h2>
            <div className={styles.errText}>
                Izbrana stran ne obstaja.
                Vrni se na ponudbo dogodkov.
            </div>
        </div>
    );
};

export default Err404;