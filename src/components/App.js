import React, { Component } from 'react';

import Block from './Block/Block';

import styles from './App.module.css';
import LayOut from './LayOut/LayOut';

const App = () => {
    return (
        <div className={styles.App}>
            <LayOut>
                <Block />
                <Block />
                <Block />
                <Block />
                <Block />
                <Block />
            </LayOut>
        </div>
    )
}

export default App;
