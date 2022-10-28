//button to delete??
//filter table 

const DisplayMusic = ({songs}) => {
    return ( 
        <div>
            <thead>
                <tr>
                    <th>Song Title</th>
                    <th>Album</th>
                    <th>Artist</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                </tr>
            </thead>
            <tbody>
                {songs.map({song} => {
                    return (
                    <tr>
                        <td>{song.title}</td>
                        <td>{song.album}</td>
                        <td>{song.artist}</td>
                        <td>{song.genre}</td>
                        <td>{song.release_date}</td>
                    </tr>
                    );
                })}

            </tbody>
        </div>
     );
}
 
export default DisplayMusic;