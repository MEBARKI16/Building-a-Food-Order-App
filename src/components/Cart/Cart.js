import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import { useContext } from 'react'
import CartContext from '../../Store/Cart-context';
import CartItem from './CartItem';
const Cart = props => {
    const crtcxt = useContext(CartContext);
    const totalAmount = `$${crtcxt.totalAmount.toFixed(2)}`;
    const cartItemRemoveHandler = id => {};
    const cartItemAddHandler = item => {};
    const hasitem = crtcxt.items.length > 0;
    const cartItem = (<ul className={classes['cart-items']}>{crtcxt.items.map((x) => (<CartItem key={x.id} name={x.name} amount={x.amount} price={x.price} onRemove={cartItemRemoveHandler} onAdd={cartItemAddHandler} />))}</ul>)
    return (
        <Modal onMask={props.onMask}>
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onMask} className={classes['button-alt']}>Close</button>
                {hasitem && <button  className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}
export default Cart;