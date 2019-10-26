import React from 'react';

const WithNumberGenerator = WrappedComponent => props =>
{
   const randomNum = Math.floor(Math.random() * 100);

   return <WrappedComponent {...props} randomNum={randomNum} />
};

export default WithNumberGenerator;