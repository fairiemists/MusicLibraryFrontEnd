//all are required fields
//How to arrange date (year only?)

import axios from "axios";
import { useState } from "react";

const AddSong = ({newSongProperty, entries}) => {

    const [title, setTitle] = useState('') //repeat
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [releaseDate, setReleaseDate] = useState('')
    const [genre, setGenre] = useState('')

    async function addSong(event){
        event.preventDefault();
        let song = {
            title:title,
            artist:artist,
            album:album,
            releaseDate:release_date,
            genre:genre,
        };
        newSongProperty(newSong);
        const response = await axios.post('http://127.0.0.1:8000/api/music/', song);
        console.log(response.data);
        setTitle('');
        setArtist('');
        setAlbum('');
        setReleaseDate('');
        setGenre('');

    }

    return ( 
        <form>
            <div className="form-row">
                <div className="form-group col-md-3">
                    <label for="addTitle">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Title"/>
                </div>
                <div className="form-group col-md-3">
                    <label for="addAlbum">Album</label>
                    <input type="text" className="form-control" id="album" placeholder="Album"/>
                </div>
                <div className="form-group col-md-2">
                    <label for="addArtist">Artist</label>
                    <input type="text" className="form-control" id="artist" placeholder="Artist"/>
                </div>
                <div className="form-group col-md-1">
                    <label for="addGenre">Genre</label>
                    <input type="text" className="form-control" id="genre" placeholder="Genre"/>
                </div>
                <div className="form-group col-md-1">
                    <label for="addReleaseDate">Release Date</label>
                    <input type="date" className="form-control" id="releaseDate" placeholder="YYYY/MM/DD"/>
                </div>
            </div>
            <br></br>
            <button 
                type="submit" 
                className="btn btn-primary"
                onClick={addSong()}
                >Add</button>
        </form>
     );
}
 
export default AddSong;