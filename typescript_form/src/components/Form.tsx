import React from 'react'
import { useState } from 'react'
import '../components/form.css'

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
  const handleUniversityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
   
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted with data:', formData);
    window.alert('Registration complete!');
  }
  return (
    <div className="container">

    <form className= "form" onSubmit={handleSubmit}>

       <div className="name">
        <label>First Name</label>
        <input type="text"  
        name="firstname" 
        value={formData.firstname}  
        title="Name can only contain letters and spaces"
        onChange={handleChange} 
        required 
        pattern="[A-Za-z\s]+"/>
       </div>

       <div className="surname">
        <label>Last Name</label>
        <input type="text" 
        name="surname" 
        value={formData.surname}  
        title="Name can only contain letters and spaces" 
        onChange={handleChange} 
        required 
        pattern="[A-Za-z\s]+"/>
       </div>

       <div className="email">
        <label>Email</label>
        <input type="text"
         name="email" 
         value={formData.email} 
         onChange={handleChange} 
         required   
         title="Please enter a valid email address" 
         pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"/>
       </div>

       <div className="phonenumber">
        <label>Phone Number</label>
        <input type="number" 
        name="phonenumber" 
        value={formData.phonenumber} 
        onChange={handleChange} 
        required  
        pattern="7\d{7}"
        title="Please enter a valid phone number starting with '7' and having a total of 8 digits"
       />
       </div>
       
       <div className="repolink">
        <label>Repolink</label>
        <input type="text" 
        name="repolink" 
        value={formData.repolink} 
        onChange={handleChange} 
        required  
        title="Please enter a valid website starting with 'https://'"  
        pattern="https:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"/>
       </div>
       <div className="universityAttended">
          <label htmlFor="universityAttended">University Attended</label>
          <select
            id="universityAttended"
            name="universityAttended"
            value={formData.universityAttended}
            onChange={handleUniversityChange} // Use the new function here
            required
          >
            <option value="">Select an option</option>
            <option value="university1">University 1</option>
            <option value="university2">University 2</option>
            <option value="university3">University 3</option>
            <option value="university4">University 4</option>
            <option value="university5">University 5</option>
          </select>
        </div>
       
       <button className="button" type="submit" >Submit</button>
    </form>
    </div>
   
  
  )
}

export default Form

