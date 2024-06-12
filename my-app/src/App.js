import React from 'react';
import MyComponent from './components/MyComponent';
import { MyContextProvider } from './context/MyContext';

function App() {
  return (
    <MyContextProvider>
      <MyComponent />
    </MyContextProvider>
  );
}

export default App;