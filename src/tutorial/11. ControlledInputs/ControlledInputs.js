import React, { useState } from 'react'

const ControlledInputs = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(name, email);
  }

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  }

  return (
    // <form onSubmit={handleSubmit}>
    <form style={{ width: 'fit-content', margin: '20px auto' }}>
      <div className="m-article">
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" value={name} onChange={handleInputChange}></input>
      </div>
      <div className="m-article">
        <label htmlFor="email">Email: </label>
        <input type="text" name="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
      </div>
      <button className="m-article" type="submit" onClick={handleSubmit} >Submit</button>
    </form>
  )
}

export default ControlledInputs
