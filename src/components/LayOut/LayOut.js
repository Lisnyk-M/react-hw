import React from 'react';
import useLayOut from '../../hooks/useLayout';
import styles from './LayOut.module.css';

const LayOut = ({ children }) => {
    const  columns = useLayOut(children);

    return (
        <div  className={styles.container}>
            <p>numberColumns= {columns}</p>
            {children}
        </div>
    )
}

export default LayOut;