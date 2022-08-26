import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { addNotification, removeNotification } from '../reducers/notificationReducer'

let timeout

const AnecdoteForm = () => {

  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    
    clearTimeout(timeout)
    const content = event.target.anecdote.value
    dispatch(removeNotification(content))
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
    dispatch(addNotification(`new anecdote '${content}'`))
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      dispatch(removeNotification(content))
    }, 5000)
  }
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm