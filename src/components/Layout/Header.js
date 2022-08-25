import classes from './Header.module.css'
import {Fragment} from 'react'
import meals from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

function Header(props)
{
     
return <Fragment>
     <header className={classes.header}>
      <h1>FoodMeals</h1>
      <HeaderCartButton onClick={props.onShower}/>
     </header>
     <div className={classes['main-image']}>
<img src={meals} alt='a table full of a delicious food!'/>
     </div>
       </Fragment>
}
export default Header;