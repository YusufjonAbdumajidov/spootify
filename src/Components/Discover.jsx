import React from 'react';
import { useLocation } from 'react-router-dom';

const Discover = (props ) => {
  const location = useLocation()
  console.log(this.props.location.state);
  return (
    <div>Discover</div>
  )
}

export default Discover