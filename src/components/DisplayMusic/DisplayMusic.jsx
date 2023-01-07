
// Write verification for delete function. 

// import axios from "axios";



const DisplayMusic = ({songs, input}) => {

    // async function deleteSong(){
    //     const response = await axios.delete('http://127.0.0.1:8000/api/music/??/');
    //     console.log(response.data);
    // }

    return ( 
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                        {/* <th>Delete</th> */}
                    </tr>
                </thead>
                <tbody>
                    {songs
                    .filter(song => 
                        song.title.toLowerCase().includes(input.toLowerCase()) ||
                        song.album.toLowerCase().includes(input.toLowerCase()) ||
                        song.artist.toLowerCase().includes(input.toLowerCase()) ||
                        song.genre.toLowerCase().includes(input.toLowerCase()) ||
                        song.release_date.toLowerCase().includes(input.toLowerCase()) 
                         )
                    .map((song) => {
                        return (
                        <tr key={song.id}>
                            <td>{song.title}</td>
                            <td>{song.album}</td>
                            <td>{song.artist}</td>
                            <td>{song.genre}</td>
                            <td>{song.release_date}</td>
                            {/* <td>
                                <button type='button'
                                    // onClick={deleteSong()}
                                    className='class="btn btn-danger'>
                                <i className="fa fa-trash"></i>
                                </button>
                            </td> */}
                        </tr>
                        );
                    })}

                </tbody>
            </table>
        </div>
     );
}
 
export default DisplayMusic;