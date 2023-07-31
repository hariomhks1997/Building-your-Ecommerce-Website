import './App.css';
import { BrowserRouter as Main ,Route,Routes } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import Form from './Pages/Form';
import Welcome from './Pages/Welcome';
import Product from './Pages/Product';

function App() {
  const formadder=async (form)=>{
  await fetch('https://reacthariom-default-rtdb.firebaseio.com/form.json',{
  method:'Post',
  body:JSON.stringify(form),
  'Content-type':'application/json'

    })
  }
  return (
    <div className="App">
      <Main>
      <MainHeader></MainHeader>
        <Routes>
          
    
    <Route exact path='/welcome' element={<Welcome></Welcome>}></Route>
    <Route exact path='/form' element={<Form addform={formadder}></Form>}></Route>
    <Route exact path='/product' element={<Product></Product>}></Route>
  
    
    
    </Routes>
    </Main>

      
    </div>
  );
}

export default App