import React from 'react';

const DynamicMenuItem = ({name, price, description}) => {
  return (
    <div className="container">
      <h2>Dynamic Data</h2>
      <div>{name}</div>
      <div>{price}</div>
      <div>{description}</div>
      </div>
      );
};

export default  DynamicMenuItem;
