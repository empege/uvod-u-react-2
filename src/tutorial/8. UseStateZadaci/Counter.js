/*
SIMPLE COUNTER:
Napravite komponentu Counter.
Neka prikazuje neki naslov koji ce biti 'BROJAC'.
Ispod neka ima h2 koji ce prikazivati vrednost brojaca, koji je za pocetak 0.
Imate 3 dugmeta - Pus, Minus i Reset.
Reset - vraca vrednost na 0.
Plus minus povecava / smanjuje vrednost.
*/

import React, { useState } from 'react'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'

const Counter = () => {

  const [value, setValue] = useState(0);

  // Complex Counter
  const increase = () => {
    setTimeout(() => {
      setValue((previousValue) => {
        return previousValue + 1;
      });
    }, 2000)
  }
  const decrease = () => {
    setValue(value - 1);
  }

  return (
    <div className="counter">
      <h3>Brojac</h3>
      <h2>{value}</h2>
      <div style={{ paddingBottom: '30px' }}>
        <button className="btn" onClick={increase}><AiFillPlusCircle /></button>
        <button className="btn" onClick={() => { setValue(0) }}>Reset</button>
        <button className="btn" onClick={decrease}><AiFillMinusCircle /></button>
      </div>
    </div>
  )
}

export default Counter
