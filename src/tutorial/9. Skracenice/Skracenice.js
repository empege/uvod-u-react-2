import React, { useState } from 'react'

const Skracenice = () => {

  const text = '';
  const vrednost1 = text || 'hello world 1';
  const vrednost2 = text && 'hello world 2';

  const [toggle, setToggle] = useState(false);

  console.log(toggle);

  // Ternary operator
  const isTrue = true;
  const x = isTrue ? 'jeste true' : 'nije true';
  console.log(x);

  return (
    <div>
      <h1>{toggle || 'OR (toggle is false)'}</h1>
      <h1>{toggle && 'AND (toggle is true)'}</h1>
      <button className="btn" onClick={() => { setToggle(!toggle) }}>Toggle</button>
    </div>
  )
}

export default Skracenice
