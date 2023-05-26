import React, { useState, useEffect } from 'react';
import axios from "axios";

const Search = () => {


  const [artists, setArtists] = useState(); 
 
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

  //hello
  
  
  
   async function fetchData(){
    try {
      const response = await axios.request(options);
      setArtists(response.data.artists.items);
    } catch (error) {
      console.error(error);
    }
   }
    
   useEffect(() => {
    fetchData();    
   }, [])
     
  console.log(artists);


  return <>
    <div className=''>
    <input type="search" className='searchInput' placeholder='Search...' />
      {artists?.map(art => {
        console.log(art)
        return <div className='item_container' key={art.data.profile.name}>
          <p>{art.data.profile.name}</p>
          <audio src={art.data.uri} controls />
          <img src={art.data.visuals.avatarImage.sources[0].url} alt="avatar" height={"260px"} width={"260px"} />
        </div>
      })}
    </div>
    </>
}

export default Search;