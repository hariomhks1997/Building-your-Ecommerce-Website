import React,{useState} from 'react'

const Form = () => {
    const [title, settitle] = useState('');
    const [openingtext, setopeningtext] = useState('')
    const [date, setdate] = useState('')

    const titlehandler=(event)=>{
        settitle(event.target.value);
       
    }
    const openingtexthanfdler=(event)=>{
       setopeningtext(event.target.value);
    }
    const datehandler=(event)=>{
   setdate(event.target.value)
    }
    
    
    const submithandler=(event)=>{
        event.preventDefault();
        const newmovieobj={
            title:title,
            openingtext:openingtext,
            date:date
        }
        console.log(newmovieobj)
    }
  return (
    <div>
        <form onSubmit={submithandler}>
        <label style={{marginRight:'32rem',fontWeight:'bold'}}>Title</label><br></br>
        <input style={{width:'95%',borderRadius:'10rem',height:'2rem'}} type='text' onChange={titlehandler}></input><br></br><br></br>
        <label style={{marginRight:'28rem',fontWeight:'bold'}}>Opening Text</label><br></br>
        <input style={{width:'95%',borderRadius:'1rem',height:'10rem',}} type='textarea' onChange={openingtexthanfdler}></input><br></br><br></br>
        <label style={{marginRight:'32rem',fontWeight:'bold'}}>Release Date</label><br></br>
        <input style={{width:'95%',borderRadius:'10rem',height:'2rem'}} type='date' onChange={datehandler}></input><br></br><br></br>
        <button type='submit'>Add Movie</button><br></br>
        </form>

    </div>
  )
}

export default Form