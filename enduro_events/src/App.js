import React from 'react';
import HomePage from './pages/home-page/home-page'

function App(props) {
  return (
    <div>

      {props.children}
    </div>
  );
}

export default App;
