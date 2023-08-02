import { useState,useRef,useContext } from 'react';
import {useNavigate} from 'react-router-dom';

import classes from './AuthForm.module.css';
import AuthContext from '../../store/auth-context';

const AuthForm = () => {
  const history=useNavigate();
  const emailinputref = useRef('');
  const passwordinputref = useRef('');
  const authctx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setisLoading] = useState(false)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submithandler=(event)=>{
    event.preventDefault();
    const enteredemail=emailinputref.current.value;
    const enteredpassword=passwordinputref.current.value;
    //optionla :Add validation
    setisLoading(true)
    let url;
    if(isLogin){
     url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAz3m7AYKNKO0fdAzD5nOCyTT-6dTFAzy4'
    }else{
      
      url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAz3m7AYKNKO0fdAzD5nOCyTT-6dTFAzy4'
    }
    fetch(url,{
        method:'Post',
        body:JSON.stringify({
          email:enteredemail,
          password:enteredpassword,
          returnSecureToken:true
        }),
        headers:{
          'Content-type':'application/json'
        }
      }).then((res) =>{
        setisLoading(false);
        if(res.ok){
          //...
          return res.json();
          
        }else{
          return res.json().then((data)=>{
            //show an error modal
            let errorMessage='Authentician failed';
            // if(data && data.error && data.error.message){
            //   errorMessage=data.error.message;
            // }
            
            throw new Error(errorMessage)
            
          })
        }
      }).then((data)=>{
        authctx.login(data.idToken); 
        history('/');
      })
      .catch((err)=>{
        alert(err.message)
      });
    

  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submithandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input ref={emailinputref} type='email' id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
          ref={passwordinputref}
            type='password'
            id='password'
            required
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ?'Login':'Create Account'}</button>}
          {isLoading && <p>Sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
