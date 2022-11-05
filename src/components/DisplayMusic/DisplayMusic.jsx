//button to delete??
//filter table 

const DisplayMusic = ({songs, input}) => {
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
                        </tr>
                        );
                    })}

                </tbody>
            </table>
        </div>
     );
}
 
export default DisplayMusic;