import { useState } from 'react'
import Button from './Button/Button'
import Modal from './Modal/Modal'

export default function EffectSection() {
  const [modal, setModal] = useState(false)

  function openModal() { 
    setModal((prev) => !prev)
  }

  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={openModal}>Open info</Button>
      
      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Cupiditate voluptate rerum maiores veniam, doloremque dolores asperiores soluta adipisci autem animi.</p>
        <Button onClick={() => setModal()}>Close info</Button>
      </Modal>
    </section>
  )
}