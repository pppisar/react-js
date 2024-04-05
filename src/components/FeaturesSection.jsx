import Button from "./Button/Button"
import { differences } from '../data'
import { useState } from "react"

// useState is hook

export default function FeaturesSection() { 
  // You can't write hooks otside component(App function)
  // const stateArray = useState("Tap on button")
  // const content = stateArray[0]
  // const setContent = stateArray[1]
  const [contentType, setContentType] = useState(null)

  // let tabContent = null

  // if (contentType) {
  //   tabContent = <p>{differences[contentType]}</p>
  // } else {
  //   tabContent = <p>Type on button</p>
  // }

  function handleClick(type) {
    setContentType(type)
    // content = type
  }

  return (
    <section>
      <h3>Our features</h3>

      <Button isActive={contentType === 'way'} onClick={() => handleClick('way')}>Approach</Button>
      <Button isActive={contentType === 'easy'} onClick={() => handleClick('easy')}>Usability</Button>
      <Button isActive={contentType === 'program'} onClick={() => handleClick('program')}>Quality</Button>

      {/* { contentType ? <p>{ differences[contentType] }</p> : <p>Type on button</p> } */}

      {/* { !contentType ? <p>Type on button</p> : null }
      { contentType ? <p>{ differences[contentType] }</p> : null } */}
      
      { !contentType && <p>Type on button</p> }
      { contentType && <p>{ differences[contentType] }</p> }

      {/* { tabContent } */}
    </section>
  )
}