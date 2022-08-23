import Header from './components/Layout/Header'
import {Fragment} from 'react'
import Meals from './components/Meals/Meals';
function App() {
  return (
    <Fragment>
      <Header/>
      <Meals/>
    </Fragment>
  );
}

export default App;
