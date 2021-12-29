import React, { useState } from 'react'

const UseStateObject = () => {

  const [person, setPerson] = useState({
    name: 'Filip',
    age: 112,
    message: 'Pozz'
  })

  // const [name, setName] = useState('Filip');
  // const [age, setAge] = useState(112);
  // const [message, setMessage] = useState('Filip');

  function changeMessage() {
    // setPerson({ name: 'Filip', age: 112, message: 'Nova Poruka!' });
    setPerson({ ...person, message: 'Nova Poruka!' });
  }

  return (
    <div>
      <h3>Osoba:</h3>
      <h4>{person.name}</h4>
      <p>{person.age}</p>
      <h2>{person.message}</h2>
      <button className="btn" onClick={changeMessage}>Change my Message</button>
    </div>
  )
}

export default UseStateObject
