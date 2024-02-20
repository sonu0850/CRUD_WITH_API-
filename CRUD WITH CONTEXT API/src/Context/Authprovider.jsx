import React, { createContext, useState } from "react";
const AuthContext = createContext();

export const Authprovider = ({ children }) => {
  const [Input, setInput] = useState({
    name: "",
    email: "",
  });
  const [tabledata, settabledata] = useState([]);
  const [editClick, seteditClick] = useState(false);
  const [EditIndex, setEditIndex] = useState("");
  const [show, setShow] = useState(false);
  const handleChange = (e) => {
    setInput({
      ...Input,
      [e.target.name]: e.target.value,
    });
  };

  const Delete = (index) => {
    const filterData = tabledata.filter((item, i) => i !== index);
    settabledata(filterData);
   
  };
  
  const Edit = (index) => {
    const tempdata = tabledata[index];
    setInput({
      name: tempdata.name,
      email: tempdata.email,
    });
    seteditClick(true);
    setEditIndex(index);
    setShow(true)
  };

  const handleSubmit =(e)=>{
    e.preventDefault()
   if (editClick) { 
    const temptabledata =tabledata 
    Object.assign(temptabledata[EditIndex], Input)
    settabledata ([...temptabledata])
    seteditClick(false)
    setInput({
      name:"", 
      email:"",
     }
     )
   } else {
    settabledata ([...tabledata, Input])
    setInput(
      {
        name:"", 
        email:"",
       }
    );
    
   }
   
  }
  return (
    <AuthContext.Provider
      value={{
        show,
        setShow,
        Input,
        setInput,
        tabledata,
        settabledata,
        editClick,
        seteditClick,
        EditIndex,
        setEditIndex,
        handleChange,
        Edit,
        Delete,
        handleSubmit,
        Edit,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
