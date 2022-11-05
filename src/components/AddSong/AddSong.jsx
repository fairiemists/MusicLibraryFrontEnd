//all are required fields
//How to arrange date (year only?)

import axios from "axios";

const AddSong = (props) => {

    async function addSong(){
        const response = await axios.post('http://127.0.0.1:8000/api/music/');
        console.log(response.data);
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
            <button 
                type="submit" 
                className="btn btn-primary"
                onClick={addSong()}
                >Add</button>
        </form>
     );
}
 
export default AddSong;