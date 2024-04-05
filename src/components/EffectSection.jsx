import { useEffect, useStat, useCallback } from 'react'
import Button from './Button/Button'
import Modal from './Modal/Modal'

export default function EffectSection() {
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  const fetchUsers = useCallback(async () => {
    setLoading(true)
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    setUsers(users)
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    <section>
      <h3>Effects</h3>

      <Button style={{marginBottom: '1rem'}} onClick={() => setModal((prev) => !prev)}>Open info</Button>
      
      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Cupiditate voluptate rerum maiores veniam, doloremque dolores asperiores soluta adipisci autem animi.</p>
        <Button onClick={() => setModal()}>Close info</Button>
      </Modal>

      {loading && <p>Loading...</p>}
      
      {!loading && <ul>
        {users.map((user) => <li id={user.id}>{user.name}</li>)}
      </ul>}
    </section>
  )
}