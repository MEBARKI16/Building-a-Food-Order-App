import CartContext from "./Cart-context";
const CartProvider = props => {
    const addItemToCatHandler = (item) => {};
    const removeItemFromCartHandler = (item) => {};
    const cartContext = {
        items : [],
        totalAmount : 2,
        addItem : addItemToCatHandler,
        removeItem : removeItemFromCartHandler,
    };
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider;