import React, { useState } from "react"; // Removed useEffect import as it's not needed for this adjustment
import styles from '../styles/search.module.css'; 
import { base_url, api_key, host } from '../constants';

function Search({ setSongTitle, setSongs }) {
    const [inputValue, setInputValue] = useState("");

    function handleChange(e) {
        setInputValue(e.target.value);
        setSongTitle(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault(); // Prevent the default form submission
        fetchSongs();
    }

    function fetchSongs() {
        const url = `${base_url}/search?q=${encodeURIComponent(inputValue)}`; 
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': api_key,
                'x-rapidapi-host': host
            }
        };
        fetch(url, options)
          .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
          .then(({data}) => {
                setSongs(data); 
            })
          .catch(error => console.error('Error fetching results:', error));
    }

    return (
        <>
            <div className={styles.search}>
                <form className={styles.searchForm} onSubmit={handleSubmit}> 
                    <input 
                        type='text' 
                        placeholder='Search music...' 
                        value={inputValue} 
                        onChange={handleChange} 
                        className={styles.searchInput}
                    />
                    <button type="submit" className={styles.searchButton}>
                        <i className={"fa fa-search"}></i>
                    </button>
                </form>
            </div>
        </>
    );
}

export { Search };
