import {useState} from 'react'
import InputForm from './InputForm';

const Form = () => {
  const [userDetails,setUserDetails] =useState({
        name:'',
        userName:'',
        role:'',
        email:'',
        password:'',
        confirmPassword:''
  })
  const inputUser=[
    {
        id:1,
        name:'name',
        type:'text',
        placeholder:'Name',
        errorMessage:'name should include 5 - 10 characters ',
        label:"name",
        pattern:"^[A-Za-z0-9]{3,16}$",
        required:true
      },
      {
        id:2,
        name:"userName",
        type:"text",
        placeholder:"UserName",
        errorMessage:"name should include 5 - 10 characters",
        label:"userName",
        pattern:"^[A-Za-z0-9]{3,16}$",
        required:true
      },
      {
        id:3,
        name:"role",
        type:"text",
        placeholder:"Role",
        errorMessage:"Please enter valid job role",
        label:"role",
        pattern:"^[A-Za-z0-9]{3,16}$",
        required:true
      },
      {
        id:4,
        name:"email",
        type:"email",
        placeholder:"Email",
        errorMessage:"Please enter valid email",
        label:"email",
        required:true
      },
      {
        id:5,
        name:"password",
        type:"password",
        placeholder:"Password",
        errorMessage:"Password must be 8-10 characters long and include at least 1 letter, 1 number and 1 special character",
        label:"password",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required:true
      },{
        id:5,
        name:"confirmPassword",
        type:"password",
        placeholder:"Confirm Password",
        errorMessage:"Password don't match",
        label:"confirmPassword",
        pattern: userDetails.password,
        required:true
      }
 ];



  const handleChange=(e)=>{
setUserDetails({...userDetails,[e.target.name]:e.target.value})
  }

  const handleSubmit=(e)=>{
e.preventDefault()
  }


    return (
    <>
    <h4>Registration Form</h4>
<form onSubmit={handleSubmit}>
{inputUser.map((user)=>(
  <InputForm key={user.id} 
  {...user}
  val={userDetails[user.name]}
  onChange={handleChange}
  />
)
)
}
<button type='submit'>Register</button>
</form>

    
    </>
  )
}

export default Form