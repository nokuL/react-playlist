import React, {useState} from 'react';
import styles from '../styles/resultsMidSection.module.css';
import { SearchResult } from './SearchResult';
import { AddToPlaylist } from './AddToPlaylist';

function ResultsMidSection({songTitle, songs}) {
    const [playlist , setPlaylist] = useState([]);

    function removeFromPlaylist(song){
         setPlaylist(playlist.filter(songItem=> songItem.id !== song.id));
         alert("Removed song")

    }

    return (
        <>
            <div className={styles.midSection}>
                <SearchResult songTitle={songTitle}
                 songs={songs}
                 setPlaylist={setPlaylist}/>
                <AddToPlaylist
                playlist={playlist}
            setPlaylist={setPlaylist}
            removeFromPlaylist={removeFromPlaylist}/>
            </div>
        </>
    );
}

export { ResultsMidSection };
