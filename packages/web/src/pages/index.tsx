import React from 'react'
import fetch from 'isomorphic-unfetch'
import useSWR from 'swr'
import fetcher from '~/utils/fetcher'

interface Item {
  id: number
  name: string
  isChecked: boolean
}

const Home: React.FC = () => {
  const { data: items, mutate } = useSWR<Item[]>('/api/list', fetcher)
  const [todo, setTodo] = React.useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch('http://localhost:3000/api/new', {
      method: 'POST',
      body: JSON.stringify({ name: todo, isChecked: false }),
    })
    mutate()
    setTodo('')
  }

  // React.useEffect(() => {
  //   window.parent.postMessage({ method: 'hasLoaded', args: true }, '*')
  // }, [])

  return (
    <div className="page">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <main>
        <ul>
          {items && items.map(({ id, name }) => <li key={id}>{name}</li>)}
        </ul>
      </main>
    </div>
  )
}

export default Home
