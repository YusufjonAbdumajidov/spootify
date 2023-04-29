import axios from "axios";
import { useState, useEffect } from 'react';

import "./styles/index.scss"
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Discover from "./Components/Discover";
import Search from "./Components/Search";
import Favourites from "./Components/Favourites";
import Playlist from "./Components/Playlist";
import Charts from "./Components/Charts"; 
import { Routes, Route } from "react-router-dom";



function App() {
  const [albums, setAlbums] = useState();
 
  const options = {
    method: 'GET',
    url: 'https://spotify23.p.rapidapi.com/search/',
    params: {
      q: '<REQUIRED>',
      type: 'multi',
      offset: '0',
      limit: '10',
      numberOfTopResults: '5'
    },
    headers: {
      'X-RapidAPI-Key': '4af006ccc7mshc0f072f880e50b5p16e687jsne19cf5dabfe8',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };
  
  
  
  useState(() => {
    axios.request(options).then(function (response) {
      console.log(response.data);
      setAlbums(response.data);
    }).catch(function (error) {
      console.error(error);
    });

  }, [])
    
    console.log(albums);
  

   
  return (
    <div className="App">
     <Navbar />
     <Header />
     <main>
     <Routes>
      <Route path="/" element={<Discover />} />
      <Route path="/Search" element={<Search />} />
      <Route path="/Favourites" element={<Favourites />} />
      <Route path="/Playlist" element={<Playlist />} />
      <Route path="/Charts" element={<Charts />} />
     </Routes>
     </main>
    </div>
  );
}

export default App;
