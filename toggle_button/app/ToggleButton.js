"use client"
import React, { useState } from 'react';

const ToggleButton = () => {
  const [text, setText] = useState('off');


  function toggleButton(){
	if(text=='off'){
	   setText('on')
	}else{
	   setText('off')
	};   
  };
    
  return (
    <button onClick={toggleButton}>
      {text}
    </button>
  );
};

export default ToggleButton;

