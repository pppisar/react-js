import { useState } from 'react'
import logo from '/logo-name.svg'

function Header() { 
  const [date, setDate] = useState(new Date())

  setInterval(() => {
    setDate(new Date())
  }, 1000)

  return (
    <header>
      <img src={logo} alt="" />

      {/* <h3>Result University</h3> */}


      <span>There will be time: { date.toLocaleTimeString() }</span>
    </header>
  )
}

export default Header