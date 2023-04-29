import axios from "axios";
import { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom"

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
  const [allData, setAllData] = useState();

 
 
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
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': 'd467b9ef16msh6eec210938822d4p1436a7jsnf278f17c9ee7',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };
  
  
  
   async function fetchData(){
    try {
      const response = await axios.request(options);
      setAllData(response.data);
    } catch (error) {
      console.error(error);
    }
   }
    
   useEffect(() => {
    fetchData();    
   }, [])
     
  console.log(allData);
   
  return (
    <div className="App">
     <Navbar allData={allData} />
     <Header />
     <main>
     <Routes>
      <Route path="/" element={<Discover  />} />
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
