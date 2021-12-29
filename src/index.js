import React, { useState } from 'react';
import ReactDom from 'react-dom';
import Article from './my blog/Article/Article'
import People from './tutorial/8. UseStateZadaci/People'
import Person from './tutorial/8. UseStateZadaci/UseStateObject'
import Counter from './tutorial/8. UseStateZadaci/Counter'
import Accordion from './tutorial/8. UseStateZadaci/Accordion'
import Skracenice from './tutorial/9. Skracenice/Skracenice'
import UseEffectBasics1 from './tutorial/10. UseEffectBasics/UseEffectBasics1'
import UseEffectBasics2 from './tutorial/10. UseEffectBasics/UseEffectBasics2'
import UseEffectBasics3Zadatak1 from './tutorial/10. UseEffectBasics/UseEffectBasics3Zadatak1'
import Listing from './my blog/Listing/Listing'
import ControlledInputs from './tutorial/11. ControlledInputs/ControlledInputs'
import ControlledInputsZadatak1 from './tutorial/11. ControlledInputs/ControlledInputsZadatak1'

// Css
import './index.scss';

function App() {
  return <ControlledInputs />
}

ReactDom.render(<App />, document.getElementById('root'));