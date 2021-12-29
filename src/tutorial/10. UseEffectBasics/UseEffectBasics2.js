import React, { useState, useEffect } from 'react'
import { FaSpinner } from 'react-icons/fa'
import User from './User'

const url = 'https://api.github.com/users';

const UseEffectBasics2 = () => {

  const [users, setUsers] = useState(null);

  async function fetchUsers(url) {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    console.log(users);
  }

  // useEffect(() => {
  //   fetchUsers(url);
  // }, [])

  useEffect(() => {
    setTimeout(() => {
      fetchUsers(url)
    }, 5000);
  }, [])

  // console.log(1);

  // setTimeout(() => {
  //   console.log('setTimeout');
  // }, 2000)

  // nekaFja();
  // console.log(2);

  // function nekaFja() {
  //   console.log(3);
  // }

  if (users) {
    return (
      <div>
        <h1>Fetch Data</h1>
        {
          users.map((current) => <User key={current.id} {...current} />)
        }
      </div>
    )
  }

  return <h1 className='spinner'><FaSpinner /><br />LOADING</h1>
}

export default UseEffectBasics2
