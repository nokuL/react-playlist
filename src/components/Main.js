import React, { useState } from 'react';
import styles from '../styles/main.module.css';
import { Search } from './Search';
import { ResultsMidSection } from './ResultsMidSection';

function Main(){
    const [songTitle, setSongTitle] = useState("");
    return (
        <>
        <div className={styles.main}>
            <Search setSongTitle={setSongTitle}></Search>
            <ResultsMidSection songTitle={songTitle}/>

        </div>
        </>
    )
}
export { Main }