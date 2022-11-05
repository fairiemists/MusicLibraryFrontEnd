import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './components/DisplayMusic/DisplayMusic';
import SearchBar from './components/SearchBar/SearchBar';
import AddSong from './components/AddSong/AddSong';

function App() {

  const [songs, setSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

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
      <AddSong/>
      <br></br>
      <br></br>
      <SearchBar input = {searchTerm} setInput = {setSearchTerm}/>
      <DisplayMusic songs = {songs} input = {searchTerm}/>
    </div>
  );
}

export default App;
