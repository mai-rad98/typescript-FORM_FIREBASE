import React from 'react'
import { useState } from 'react'

interface FormData{
    firstname: string
    surname: string
    email: string
    phonenumber: number
    repolink: string
    universityAttended: string
  
  }



const Form : React.FC = () => {

  const [formData,setFormData] = useState<FormData> ({
   firstname:'',
   surname:'',
   email:'',
   phonenumber:0,
   repolink:'',
   universityAttended:''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
   
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <div className="container">

    <form className= "form" onSubmit={handleSubmit}>
       

    </form>
    </div>
   
  
  )
}

export default Form

