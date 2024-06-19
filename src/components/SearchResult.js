import React, { useEffect, useState } from 'react';
import styles from '../styles/searchResult.module.css';
import { base_url, api_key, host } from '../constants';

function SearchResult({songTitle}) { 
    const [results, setResults] = useState([]); 

    const url = `${base_url}/search?q=eminem`; 
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': api_key,
            'x-rapidapi-host': host
        }
    };

    useEffect(()=>{
        fetch(url, options)
       .then(response =>
            response.json())
       .then(data => setResults(data)) 
       .catch(error => console.error('Error fetching results:', error));
    }, [songTitle]);

    return (
        <>
            <div className={styles.results}>
                <h3>Search Results</h3>
                <p>{songTitle}</p>
                <ul>
                    {
                        results.length > 0? results.map((result, index) => (
                            <li key={index}>{result.title}</li>
                        )) : <li>No results found.</li> 
                    }
                </ul>
            </div>
        </>
    );
}

export { SearchResult };
