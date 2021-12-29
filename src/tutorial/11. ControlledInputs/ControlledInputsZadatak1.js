/* Uradite kratku validaciju:
Napravite name i email state promenljivu koji predstavljaju jednu osobu.
Kada neko klikne na submit, prikazite tu osobu ispod forme i resetujete inpute (resetujete state nazad na prazan string).
Ako fali jedno od 2, neka iskoci alert ili neka greska - npr ako su oba true, onda prodji, ako ne - alert().
Mozete da imate niz objekata ljudi, koji je za pocetak prazan npr.
Ako vam treba da napravite i id, sto mozete ovako: id: new Date().getTime().toString();
*/

import React, { useState } from 'react'

const ControlledInputsZadatak1 = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);

    if (!(name && email)) {
      alert('Morate ubaciti oba!')
    } else {
      setPeople([...people, { id: `${new Date().getTime().toString()}`, name, email }]);
    }
  }

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  }

  return (
    <>
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
      <section>
        {
          people.map((person) => {
            return (
              <article key={person.id} className="m-article">
                <h3>{person.name}</h3>
                <h3>{person.email}</h3>
              </article>
            )
          })
        }
      </section>
    </>
  )
}

export default ControlledInputsZadatak1
