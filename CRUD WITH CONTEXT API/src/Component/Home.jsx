import React from 'react'
import useAuth from '../Context/useAuth'



const Home = () => {
  const {Input,handleSubmit, setInput,editClick,  }=useAuth()
  

 


  const handleChange =(e)=>{
  setInput(
    {
      ...Input, [e.target.name]:e.target.value,
    }
  )
  }

  

     
  
  
  return (
    <div>
      <div className='form'>
        <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" placeholder='Name' name='name' value={Input.name} onChange={handleChange} />
        <label>Email</label>
        <input type="text" placeholder='Email' name='email' value={Input.email} onChange={handleChange}  /> <br />
        <button  type='submit'   className='mt-4 btn btn-danger '  >  {editClick?"Update":"Submit"}</button>
        
       
        </form>
      </div>

  
    </div>
  )
}

export default Home
