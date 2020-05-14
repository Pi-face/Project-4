import React,{useState} from 'react';

const Register = () =>{
    const[user,setUser] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })
    
    const { name,email,password,password2 } = user;

    return(
        <div>
         <h1>
             Account <span>Register</span>
         </h1>
         <form>
             
         </form>
        </div>
    )
}


export default Register