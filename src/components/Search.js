import React, { useState } from "react";
import styles from '../styles/search.module.css'; 

function Search({ setSongTitle }) {
    const [inputValue, setInputValue] = useState("");

    function handleChange(e) {
        setInputValue(e.target.value);
        setSongTitle(e.target.value);
    }

    return (
        <>
            <div className={styles.search}>
                <form className={styles.searchForm}>
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
