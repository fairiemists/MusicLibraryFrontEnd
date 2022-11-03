import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './components/DisplayMusic'

function App() {

  const [songs, setSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Search")

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data);
    setSongs(response.data)
  }


  return (
    <div>
      <DisplayMusic songs = {songs} />
    </div>
  );
}

export default App;
