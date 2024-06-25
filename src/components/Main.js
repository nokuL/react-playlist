import React, { useState } from 'react';
import styles from '../styles/main.module.css';
import { Search } from './Search';
import { ResultsMidSection } from './ResultsMidSection';

function Main(){
    const [songTitle, setSongTitle] = useState("");
    const [songs, setSongs] = useState([]);
    return (
        <>
        <div className={styles.main}>
            <Search setSongTitle={setSongTitle}
            setSongs={setSongs}></Search>
            <ResultsMidSection 
            songTitle={songTitle}
             songs={songs}/>

        </div>
        </>
    )
}
export { Main }