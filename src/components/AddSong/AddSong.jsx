//all are required fields
//How to arrange date (year only?)

import axios from "axios";
import { useState } from "react";

const AddSong = ({props, newSongProperty, songs}) => {

    const [title, setTitle] = useState('') 
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [releaseDate, setReleaseDate] = useState('')
    const [genre, setGenre] = useState('')


    function handleSubmit(event) {
        event.preventDefault();
        let newSongInfo = {
            title:title,
            album:album,
            artist:artist,
            genre:genre,
            release_date:releaseDate,
        };
        addSong(newSongInfo);
    }



    async function addSong(newSongInfo){
        await axios.post('http://127.0.0.1:8000/api/music/', newSongInfo);
        props.getAllSongs();
        
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group col-md-3">
                    <label for="addTitle">Title</label>
                    <input type="text" onChange={(event) => setTitle(event.target.value)} className="form-control" id="title" placeholder="Title"/>
                </div>
                <div className="form-group col-md-3">
                    <label for="addAlbum">Album</label>
                    <input type="text" onChange={(event) => setAlbum(event.target.value)} className="form-control" id="album" placeholder="Album"/>
                </div>
                <div className="form-group col-md-2">
                    <label for="addArtist">Artist</label>
                    <input type="text" onChange={(event) => setArtist(event.target.value)} className="form-control" id="artist" placeholder="Artist"/>
                </div>
                <div className="form-group col-md-1">
                    <label for="addGenre">Genre</label>
                    <input type="text" onChange={(event) => setGenre(event.target.value)} className="form-control" id="genre" placeholder="Genre"/>
                </div>
                <div className="form-group col-md-1">
                    <label for="addReleaseDate">Release Date</label>
                    <input type="date" onChange={(event) => setReleaseDate(event.target.value)} className="form-control" id="releaseDate" placeholder="YYYY/MM/DD"/>
                </div>
            </div>
            <br></br>
            <button 
                type="submit" 
                className="btn btn-primary"
                >Add</button>
        </form>
     );
}
 
export default AddSong;