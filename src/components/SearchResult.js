import React, { useEffect, useState } from 'react';
import styles from '../styles/searchResult.module.css';


function SearchResult({ songTitle, songs, setPlaylist }) {
    const [results, setResults] = useState([]);

    useEffect(() => {
        setResults(songs);
    }, [songTitle, songs]);

    function addToPlaylist(song) {
        setPlaylist(prev => [...prev, song]);
    }

    return (
        <>
            <div className={styles.results}>
                <h3>Search Results</h3>
                <ul>
                    {
                      results &&  results.length > 0? results.map((result, index) => (
                            <li key={index}> 
                                <div className={styles.listView}>
                                    <div className={styles.listViewTitle}>{result.title}</div>
                                    <div className={styles.listViewIcon}>
                                        <i className="fa fa-plus" onClick={() => addToPlaylist(result)}></i>
                                    </div>
                                </div>
                            </li>
                        )) : <li>No results found.</li>
                        
                    }
                </ul>
            </div>
        </>
    );
}

export { SearchResult };

