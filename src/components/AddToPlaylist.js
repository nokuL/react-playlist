import React  from "react";
import styles from "../styles/addToPlaylist.module.css";

function AddToPlaylist({playlist, removeFromPlaylist}){
   
    return (
        <>
        <div className={styles.playlist} >
               <h3> Create Playlist</h3>
               <ul>
              {
    playlist && playlist.length > 0? playlist.map((song) => {
        return (
            <li>
                <div className={styles.listView}>
                    <div className={styles.listViewTitle}>{song.title}</div>
                    <div className={styles.listViewIcon}>
                        <i className="fa fa-minus" onClick={() => removeFromPlaylist(song)}></i>
                    </div>
                </div>
            </li>
        );
    }) : <li>No results found.</li>
}

               </ul>
               {
                playlist.length > 0 &&(
                    <button className={styles.saveButton}>Save Playlist</button>
                )
               }
         </div>
        </>
    )
}
export { AddToPlaylist };