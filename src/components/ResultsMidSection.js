import React from 'react';
import styles from '../styles/resultsMidSection.module.css';
import { SearchResult } from './SearchResult';
import { AddToPlaylist } from './AddToPlaylist';

function ResultsMidSection({songTitle}) {
    return (
        <>
            <div className={styles.midSection}>
                <SearchResult songTitle={songTitle}/>
                <AddToPlaylist/>
            </div>
        </>
    );
}

export { ResultsMidSection };
