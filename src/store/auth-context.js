import React,{useState} from 'react'; 

const AuthContext = React.createContext({
token:'',
isLoggedIn:false,
login:(token)=>{},
logout:()=>{}

});
  


export const AuthContextProvider=(props)=>{
    const [token,settoken]=useState(null);
    const userIsLoggedIn=!!token;
    const loginhandler=(token)=>{
        settoken(token)
    }
    const logouthandler=()=>{
      settoken(null)
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