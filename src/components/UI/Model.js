import React,{Fragment} from 'react';
import classes from'./Model.module.css';
import ReactDOM  from 'react-dom';
const Backdrop=(props)=>{
return (
    <div className={classes.backdrop} onClick={props.onClick}></div>
)
}
const ModalOverlay=(props)=>{
    return (
        <div className={classes.modal}>
        <div classname={classes.content}>{props.children}</div>
        </div>
    )

}
const portalelement=document.getElementById('overlays')
const Model = (props) => {
  return (
    <Fragment>
     {ReactDOM.createPortal(<Backdrop onClick={props.onClick}></Backdrop>,portalelement)}
     {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalelement)}
    </Fragment>
  )
}

export default Model; 