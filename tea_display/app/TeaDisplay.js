import React from 'react';

const TeaDisplay = ({ name, origin, description }) => {
  return (
    <div className="container">
      {/*<h2>Static Data</h2>
      <div>name: Brooke Bond Taaza</div>
      <div>origin: India</div>
      <div>description: Brooke Bond Taaza is a special tea blend made with tea leaves from select Trustea certified gardens.</div>*/}
      
     { /* <h2>Dynamic Data</h2>
      <div>name: {name}</div>
      <div>origin: {origin}</div>
      <div>description: {description}</div>*/}
      
      
      <div className="array">
       <h2>Data of each object</h2>
        <div>{name}</div>
         <div>{origin}</div>
         <div>{description}</div>
         
      </div>
    </div>
  );
};

export default TeaDisplay;

