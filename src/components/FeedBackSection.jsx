import { useState, useRef } from "react"
import Button from "./Button/Button"

function StateVsRef() {
  const input = useRef()
  const [show, setShow] = useState(false)

  function handleKeyDown(event) { 
    if (event.key === 'Enter') { 
      setShow(true)
    }
  }

  return (
    <div>
      <h3>Input value: {show && input.current.value}</h3>
      <input
        ref={input}
        className="control"
        type="text"
        onKeyDown={handleKeyDown}/>
    </div>
  )
}

export default function FeedbackSection() { 
  // const [name, setName] = useState('')
  // const [hasError, setHasError] = useState(true)
  // const [reason, setReason] = useState('help')

  const [form, setForm] = useState({
    name: '',
    hasError: true,
    reason: 'help',
  })

  function handleNameChange(event) { 
    // setName(event.target.value)
    // setHasError(event.target.value.trim().length === 0)
    setForm(prev => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0}))
  }
  

  // function toggleError() {
  //   // How to work right with previous state
  //   setHasError((prev) => !prev) // false
  //   // setHasError((prev) => !prev) //true
  // }

  return (
    <section>
      <h3>Feedback</h3>

      {/* <Button onClick={ toggleError }>Toggle Error</Button> */}
      <form style={{marginBottom: '1rem'}}>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          style={{ border: form.hasError ? '1px solid red' : null }}
          onChange={ handleNameChange }
        />

        <label htmlFor="reason">Feedback reason</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={(event) => setForm((prev) => ({...prev, reason:event.target.value}))}
        >
          <option value="error">Error</option>
          <option value="help">Need help</option>
          <option value="proposal">Proposal</option>
        </select>

        <pre>
          Name: {form.name}
          <br />
          Reason: { form.reason }
        </pre>

        <Button
          disabled={form.hasError}
          isActive={!form.hasError}
        >
          Send
        </Button>
      </form>

      <StateVsRef />
    </section>
  )
}