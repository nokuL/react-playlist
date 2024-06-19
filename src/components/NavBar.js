import React from 'react';
import styles from '../styles/navbar.module.css'; // Ensure this matches your CSS file name

function NavBar() {
    return (
        <>
       <div className={styles.navigation}>
        <div className={styles.logo}>
            <img src="https://static.vecteezy.com/system/resources/previews/010/618/648/non_2x/logo-music-illustration-of-musical-notes-vector.jpg" className={styles.logoImg}/>
        </div>
        <div className={styles.menu}>
            <a href="#">Home</a>
            <a href="#">Contact</a>
            <a href="#">About</a>
            <a href="#">Blog</a>

        </div>

    </div>
        </>
    );
}

export { NavBar };
