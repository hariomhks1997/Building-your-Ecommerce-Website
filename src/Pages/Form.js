import React,{useState} from 'react';
import classes from'./Form.module.css';

const Form = (props) => {
    const currDate = new Date().toLocaleString();
    console.log(currDate)
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [mobile, setmobile] = useState('')
    const [date, setdate] = useState(currDate)
    const namehandler=(event)=>{
        setname(event.target.value)

    }
    const emailhandler=(event)=>{
        setemail(event.target.value)

    }
    const numberhandler=(event)=>{
        setmobile(event.target.value)

    }
    const datehandler=(event)=>{
        setdate(event.target.value)
        
    }
    const submithandler=(event)=>{
    event.preventDefault();
    const obj={
        name:name,
        email:email,
        mobile:mobile,
        date:date
    }
    props.addform(obj)
    }

  return (
    <div className={classes.control}>
    <form onSubmit={submithandler}>
        <label>Name</label><br></br>
        <input type='text' onChange={namehandler}></input><br></br>
        <label>Email</label><br></br>
        <input type='email' onChange={emailhandler}></input><br></br>
        <label>Mobile No</label><br></br>
        <input type='number'onChange={numberhandler}></input><br></br>
        <label>Date</label><br></br>
        <input type='date' onChange={datehandler}></input><br></br><br></br>
        <button type='submit'>Add Form</button><br></br>
    </form>
    </div>
  )
}

export default Form