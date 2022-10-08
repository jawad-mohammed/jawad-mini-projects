import React from 'react'
import {useNavigate} from 'react-router-dom'
const Logout = () => {
  const navigate = useNavigate()
  setTimeout(()=>{
 
    navigate('/login')
  },2500)
  return (
    <div>
      <h2>Thanks for using our app...</h2>
    </div>
  )
}

export default Logout
