import React, { useState, useEffect } from 'react';
import axios from "axios";


const Discover = (  ) => {

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
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': 'd467b9ef16msh6eec210938822d4p1436a7jsnf278f17c9ee7',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };
  
  
  
   async function fetchData(){
    try {
      const response = await axios.request(options);
      setAlbums(response.data.albums.items);
    } catch (error) {
      console.error(error);
    }
   }
    
   useEffect(() => {
    fetchData();    
   }, [])
     
  console.log(albums);

 
  
  return (
    <div className='discover'>
      <h1>Discover</h1>
      {albums?.map((item) => {
        return (
          <div key={item.id}>
            {/* <img src={} alt={item.name} /> */}
            <p>{item.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Discover