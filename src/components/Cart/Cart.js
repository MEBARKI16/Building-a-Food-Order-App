import classes from './Cart.module.css'
const Cart = props => {
    const cartItem = (<ul className={classes['cart-items']}>{[{id:'c1',name:'sushi',amount:2,price:12.99}].map((x) => (<li>{x.name}</li>))}</ul>)
    return (
        <div>
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button-alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </div>
    )
}
export default Cart;