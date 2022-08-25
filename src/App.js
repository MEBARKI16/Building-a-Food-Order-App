import Header from './components/Layout/Header'
import {Fragment} from 'react'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
function App() {
  const [isVesible,setisVesible] = useState(false);
  function afficher(){
     setisVesible(true);
  }
  function masquer(){
    setisVesible(false);
  }
  return (
    <Fragment>
      {isVesible && <Cart onMask={masquer}/>}
      <Header onShower={afficher}/>
      <Meals/>
    </Fragment>
  );
}

export default App;
