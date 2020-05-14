import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap';

const Login = () =>{
    const[user,setUser] = useState({
        email:'',
        password:'',
    })
    
    const { email , password } = user;

    const onChange = e => setUser({...user, [e.target.name]: e.target.value});

    const onSubmit = e =>{
        e.preventDefault();
        console.log('Login submit');
    }

    return(
        <div>
         <h1>
             Account <span>Login</span>
         </h1>

         <Form onSubmit={onSubmit}>
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email Address</Form.Label>
                         <Form.Control name="email" placeholder="Enter email" value={email} onChange={onChange} />
                  </Form.Group>
              <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" placeholder="Password" value={password} onChange={onChange}/>
              </Form.Group>
            
              <Button variant="primary" type="submit" value='Login'>Submit</Button>

        </Form>
        </div>
    )
}


export default Login