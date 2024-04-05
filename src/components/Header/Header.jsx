import { useState } from 'react'
import { styled } from 'styled-components'
import logo from '/logo-name.svg'
// import './Header.css'

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`

function Header() { 
  const [date, setDate] = useState(new Date())

  setInterval(() => {
    setDate(new Date())
  }, 1000)

  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      {/* <h3>Result University</h3> */}


      <span>There will be time: { date.toLocaleTimeString() }</span>
    </HeaderContainer>
  )
}

export default Header