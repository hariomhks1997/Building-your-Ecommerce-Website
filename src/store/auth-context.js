import React,{useState} from 'react'; 

const AuthContext = React.createContext({
token:'',
isLoggedIn:false,
login:(token)=>{},
logout:()=>{}

});
  


export const AuthContextProvider=(props)=>{
    const initialtoken=localStorage.getItem('token')
    const [token,settoken]=useState(initialtoken);
    const userIsLoggedIn=!!token;
    const loginhandler=(token)=>{
        

        settoken(token);
        localStorage.setItem('token',token);
    }
    const logouthandler=()=>{
      
      
      settoken(null)
      localStorage.removeItem('token');
    }
    const contextvalue={
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginhandler,
        logout:logouthandler
    }

    return (<AuthContext.Provider value={contextvalue}>{props.children}</AuthContext.Provider>)
}
export default AuthContext;