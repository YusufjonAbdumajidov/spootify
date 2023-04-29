import React from 'react';
import { useLocation } from 'react-router-dom';

const Discover = (    ) => {
  const {state} = useLocation();
  const { allData } = state;
  console.log(allData);
  return (
    <div>Discover</div>
  )
}

export default Discover