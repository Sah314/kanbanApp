import React from 'react'
import { TextField,Stack,Button,Link } from '@mui/material'
import { useState } from 'react'
import axios from 'axios'
function Login() {

  const [userData,setuserData] = useState({
    email:"",
    password:""
  })
  const api = 'http://localhost:5000/auth/login';  


  const handleFormSubmit = async(event)=>{
    event.preventDefault(); 
    try {
      const res = await axios.post(api,{
        email : userData.email ,
        password:userData.password
      });
      console.log(res.data);
    } catch (error) {   
      console.error(error);
    }
    
  }
  const onHandleChange=(e)=>{
    setuserData({...userData,[e.target.name]: e.target.value})
  }

  return (
    <div className='Login_container' style={{margin:"3rem"}}>
      <form onSubmit={handleFormSubmit}>
        <Stack spacing={2} width={300}>
          <TextField label="Email" 
          type='email'
          name='email'
          onChange={onHandleChange}
            />
          <TextField label="Password" 
          type='password'
          name='password'
          onChange={onHandleChange}
         
           />
          <Button type='submit' variant='contained' color='primary'>Login</Button>
          <Stack spacing={0.3} width={300}>
          <Link href="/Signup" underline="hover">
  {'Not a user? Signup'}
</Link>
          </Stack>
        </Stack>
      </form>
    </div>
  )
}
export default Login