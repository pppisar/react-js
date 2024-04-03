const now = new Date()

function Header() { 
  return (
    <header>
      <h3>Result University</h3>
      <span>There will be time: { now.toLocaleTimeString() }</span>
    </header>
  )
}

export default Header