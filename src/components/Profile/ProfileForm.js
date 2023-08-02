import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';
import { useRef,useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileForm = () => {
  const history=useNavigate();
  const authctx = useContext(AuthContext)
  const newPasswordInputref=useRef();
  const submithandler=(event)=>{
  event.preventDefault();
  const enteredNewPassword=newPasswordInputref.current.value;
  //add validation

  
  fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAz3m7AYKNKO0fdAzD5nOCyTT-6dTFAzy4',{
    method:'Post',
        body:JSON.stringify({
        idToken:authctx.token,
        password:enteredNewPassword,
        returnSecureToken:false
        }),
        headers:{
          'Content-type':'application/json'
        }
  }).then((res)=>{
    //asumption:always suceeds!
    history('/')

  })
  }
  return (
    <form className={classes.form} onSubmit={submithandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input ref={newPasswordInputref} type='password' id='new-password' minLength='7' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
