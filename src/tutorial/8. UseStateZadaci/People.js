import React, { useState } from 'react'
import { AiFillMinusCircle } from 'react-icons/ai'

// data
import { data } from './data'

const People = () => {

  const [people, setPeople] = useState(data);
  // console.log(people);

  const deleteAllPeople = () => {
    setPeople([]);
  }

  const deleteCurrent = (id) => {
    console.log(id);

    const newPeople = people.filter((current, index) => {
      if (current.id !== id) {
        return current;
      }
      return false;
    });

    console.log(newPeople);
    setPeople(newPeople);
  }

  return (
    <section>
      {
        people.map((person) => {
          const { id, name } = person;

          return (
            <article key={id} className="m-article m-article--people">
              <h3>{name}</h3>
              <button onClick={() => { deleteCurrent(id) }}><AiFillMinusCircle /></button>
            </article>
          )
        })
      }
      <button className="m-article" onClick={deleteAllPeople}>Delete Everyone!</button>
    </section>
  )
}

export default People