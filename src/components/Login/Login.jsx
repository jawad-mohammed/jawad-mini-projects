 
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
 import TextField from '@mui/material/TextField';
 import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
const Login = () => {
const navigate = useNavigate()

    const [userInfo,setUserInfo] = useState({
        email:'',
        password:''
    })
    const {email,password} = userInfo
const handleChange=(e)=>{
setUserInfo({...userInfo,[e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{
e.preventDefault()
console.log(userInfo);
setUserInfo({
    email:'',
    password:''
})
const userEmail= userInfo.email
const userPassword = userInfo.password
if(userEmail==='test' && userPassword ==='password'){
    navigate('/billing')
}else{
    alert('Please enter email:test & password:password')
    navigate('/login')
}
}
  return (
    <div>
        
        <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
<section>
<h2>Application for personal use.....</h2>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 4, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

  
      <TextField  label="Email" variant="standard" name='email' value={email} onChange={handleChange} />
      <TextField  label="Password" variant="standard" name='password' value={password} onChange={handleChange} />
      <Stack spacing={2} direction="row">
       
      <Button variant="contained" type='submit' onClick={handleSubmit}>Login</Button>
      
    </Stack>
    </Box>
  
</section>


        </Box>
      </Container>
        
        
        
        </div>
  )
}

export default Login