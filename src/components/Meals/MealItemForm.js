import classes from './MealItemForm.module.css'
import Input from '../UI/Input';
import { useRef } from 'react';
const MealItemForm = props => {
    const amountInputRef = useRef();
    const submitHandler = (event) =>{
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if(
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 || 
            enteredAmountNumber > 5
        ) {
            return;
        }
props.onAddToCart(enteredAmountNumber);
    }
    return(
       <form onSubmit={submitHandler} className={classes.form}>
        <Input  label='Amount'  ref ={amountInputRef} input={{
            id:'amount',
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }}/>
        <button>+ add</button>
       </form>
    );
}
export default MealItemForm;