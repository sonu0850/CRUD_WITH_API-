import React from 'react'
import useAuth from '../Context/useAuth'

const SavedData = () => {
  const {setshow, Delete, Edit,  setInput,tabledata, settabledata, seteditClick, setEditIndex, }=useAuth()
  
    

  
 
  return (
    <>
    <div>
    <table className='w-100 text-center'>
    <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>
    {tabledata.map((item, i) => (
    <tr>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>
        <div className="btn  ">
        <button onClick={()=>Delete(i)} className='bg-primary rounded'>Delete</button>
        <button onClick={()=>Edit (i)}  className='bg-primary rounded mx-2'>Edit</button>
        
        </div>
      </td>

    </tr>
  ))}
    </tbody>
  </table>
    </div>

  </>
  )
}

export default SavedData
