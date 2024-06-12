import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext';

const MyComponent = () => {
  const { contextValue , updateContextValue } = useContext(MyContext);

  const handleClick = () => {
    updateContextValue('New value');
  };

  return (
    <div>
      <h1>My Component</h1>
      <p>Context value: {contextValue}</p>
      <button onClick={handleClick}>Update Value</button>
    </div>
  );
};

export default MyComponent;