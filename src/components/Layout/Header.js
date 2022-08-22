import classes from './Header.module.css'
import {Fragment} from 'react'
import meals from '../../assets/meals.jpg'
function Header(props)
{
return <Fragment>
     <header className={classes.header}>
      <h1>FoodMeals</h1>
      <button>Cart</button>
     </header>
     <div className={classes['main-image']}>
<img src={meals} alt='a table full of a delicious food!'/>
     </div>
       </Fragment>
}
export default Header;