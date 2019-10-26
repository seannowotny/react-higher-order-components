import React, { useEffect } from 'react'

import CustomState from './hooks/CustomState';

const Hello = ({ randomNum }) => 
{
   let [state, setState] = CustomState('Something great');
   
   useEffect(() =>
   {
      setState('Something even greater');
      //eslint-disable-next-line
   }, []);

   return (
      <h1>Hello {randomNum} My custom state: {state}</h1>
   )
}

export default Hello
