import {useState} from 'react'

const InputForm = (props) => {
 const [focus,setFocus] = useState(false)
    const {label,errorMessage, onChange,id,...userprops} = props
   
   const handleFocus=(e)=>{
 setFocus(true)
   }
    return (
    <>
    <label>{label}</label>
<input
{...userprops}
onChange={onChange}
onBlur={handleFocus}
onFocus={()=>
    userprops.name === "confirmPassword" && setFocus(true)
}
focus={focus.toString() }
/>
<p>{errorMessage}</p>
    </>
  )
}

export default InputForm