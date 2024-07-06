import React from 'react';

const Counter = ({ increment, count }) => {
  return (
    <div className ="counter-box">
      <div className="count-box">
        {count}
      </div>
      <button onClick={increment}>
        Increment
      </button>
  
    </div>
  );
};

export default Counter;

