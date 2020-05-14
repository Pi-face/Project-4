import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap';

const Register = () =>{
    const[user,setUser] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })
    
    const { name,email,password,password2 } = user;

    const onChange = e => setUser({...user, [e.target.name]: e.target.value});

    const onSubmit = e =>{
        e.preventDefault();
        console.log('Register submit');
    }

    return(
        <div>
         <h1>
             Account <span>Register</span>
         </h1>

         <Form onSubmit={onSubmit}>
              <Form.Group controlId="formBasicEmail">
               <Form.Label>Name</Form.Label>
                     <Form.Control name="name" placeholder="Name" value={name} onChange={onChange}/>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email Address</Form.Label>
                         <Form.Control name="email" placeholder="Enter email" value={email} onChange={onChange} />
                  </Form.Group>
              <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" placeholder="Password" value={password} onChange={onChange}/>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control name="password2" placeholder="Password" value={password2} onChange={onChange} />
              </Form.Group>
              <Button variant="primary" type="submit">Submit</Button>

        </Form>
        </div>
    )
}


export default Register