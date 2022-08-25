import Header from './components/Layout/Header'
import {Fragment} from 'react'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
function App() {
  return (
    <Fragment>
      <Cart></Cart>
      <Header/>
      <Meals/>
    </Fragment>
  );
}

export default App;
