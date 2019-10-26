import { useState } from 'react';

const CustomState = (initialState) => 
{
   const [state, setState] = useState(initialState);
   
   return [state, setState];
};

export default CustomState;