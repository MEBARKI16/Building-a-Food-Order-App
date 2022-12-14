import classes from './Modal.module.css'
import { Fragment } from 'react';
import  ReactDOM  from 'react-dom';
const Backdrop = props => {
    return <div onClick={props.onClose} className={classes.backdrop}/>;
};
const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}
const Modal = props => {
    const elt = document.getElementById('overlays');
    return (
        <Fragment>
{ReactDOM.createPortal(<Backdrop onClose={props.onMask}/>,elt)}
{ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,elt)}
        </Fragment>
    )
}
export default Modal;