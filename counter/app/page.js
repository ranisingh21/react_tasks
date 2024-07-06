"use client";

import React from 'react';
import Counter from './Counter'
import { useState } from "react";
const App = () =>{
  const [count, setCount] = useState(0);
  
  const  Increment = () => {
     setCount(count + 1);
  };  

   return (
     <>
      <Counter
      increment = {Increment}
      count = {count}/>
     </>
  );
};

export default App;



