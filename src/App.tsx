import React from 'react';
import NavBar from './Components/ViewItem/NavBar';
import Item from './Components/ImageDisplay/Item';
import ChooseItemContainer from './Components/ViewItem/ChooseItem/ChooseItemContainer';
import './App.css';
import AboutFrameDes from './Components/AboutFrame/AboutFrameDes';

function App() {
  return (
    <div className="App w-screen">
      {/* <header className="App-header">
       
      </header> */}
     
      <NavBar />
      <div className='flex items-start'>
      <Item /><ChooseItemContainer/>
</div>
<AboutFrameDes />
    </div>
  );
}

export default App;
