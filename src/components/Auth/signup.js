import {useState,React, useEffect} from 'react'
import { TextField,Stack,Button,Link } from '@mui/material'
import axios from 'axios';
function Signup() { 
  const [formData,setFormData] = useState({
    username:"",
    email:"",
    password:""
  })
  const api = 'http://localhost:5000/auth/signup';  

  const handleFormSubmit = async(event)=>{
    event.preventDefault(); 
    try {
      console.log("waiting for data from axios...");  
      const res = await axios.post(api,{
        username: formData.username,
        email: formData.email,
        password: formData.password
      });
      console.log("Data received...");

      console.log(res.data);
    } catch (error) {
      console.error("error: ",error);
    }
    
  }

  const validateUsername=()=>{

  }

  const handleChange=(e)=>{
      setFormData({
        ...formData,[e.target.name]:e.target.value,
      });
  };

  useEffect(() => {  
  
   
  }, [])
  
  return (
    <div className='Login_container' style={{margin:"3rem"}}>
      <form onSubmit={handleFormSubmit}>
        <Stack spacing={2} width={300}>
          <TextField label="username" 
          name='username'
          type='text'
          onChange={handleChange}
            />
          <TextField label="email" 
          name='email'
          type='email'
          onChange={handleChange}
            />
          <TextField label="password"
          name='password' 
          type='password'
          onChange={handleChange}
           />
          <Button type='submit' variant='contained' color='primary'>Login</Button>
          <Stack spacing={0.3} width={300}>
          </Stack>
        </Stack>
      </form>
    </div>
  )
}

export default Signup