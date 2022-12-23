import React from 'react';
import styles from './err.module.css';

const Err500 = () => {
    return (
        <div className={styles.box}>
            <h2 className={styles.errNo}>500</h2>
            <div className={styles.errText}>
                Prišlo je do napake na strežniku.
                Prosimo te, da poskusiš pozneje in se ti opravičujemo za nevščenost.
            </div>
        </div>
    );
};

export default Err500;