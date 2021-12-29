import React, { useState, useEffect } from 'react'

// PRAVILA:
// 1. Po default se pokrece posle svakog rerendera
// 2. Drugi parametar je dependency array
// 3. Kada je dependency array prazan, useEffect se desava samo posle prvog rendera!
// 4. Kada stavimo promenljivu u dependency array, useEffect se desava kad god se promeni state te promenljive.
// 5. useEffecta mozemo da imamo koliko zelimo.
// 6. Cleanup funkcija

function UseEffectBasics1() {

  const [notification, setNotification] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const increaseNotification = () => {
    setNotification(notification + 1);
  }

  const screenResize = () => {
    setScreenWidth(window.innerWidth)
  }

  // Empty dependency array - samo posle prvog rendera
  useEffect(() => {
    console.log('Only after first render!');
  }, [])

  // dependency array sa promenljivom - kad god se promeni vrednost promenljive
  useEffect(() => {
    console.log('useEffect');
    // Side effect
    if (notification > 0) {
      document.title = `${notification} New Notifications`
    }
    // Cleanup funkcija - desi se pre onoga u samom useEffectu
    return () => {
      console.log('Clean up');
    }
  }, [notification])


  // Cleanup
  useEffect(() => {
    window.addEventListener('resize', screenResize)

    return () => {
      window.removeEventListener('resize', screenResize);
    }
  })

  console.log('Component rendered');


  return (
    <div>
      <h1>useEffect Basics</h1>
      <h3>Notifications:</h3>
      <h2>{notification}</h2>
      <button onClick={increaseNotification} className="btn">New Notification</button>
      <br />
      <h3>Screen Width:</h3>
      <h2>{`${screenWidth}px`}</h2>
    </div>
  )
}

export default UseEffectBasics1
