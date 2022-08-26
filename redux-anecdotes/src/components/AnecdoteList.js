import { useDispatch, useSelector } from 'react-redux'
import { appendVote } from '../reducers/anecdoteReducer'
import { addNotification, removeNotification } from '../reducers/notificationReducer'

let timeout

const AnecdoteList = () => {

  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()
  

  const vote = (obj) => {
    clearTimeout(timeout)
    dispatch(removeNotification(obj.content))
    dispatch(appendVote(obj))
    dispatch(addNotification(`you voted '${obj.content}'`))
    timeout = setTimeout(() => {
      dispatch(removeNotification(obj.content))
    }, 5000)
  }

  return (<div>
    {anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote)}>vote</button>
        </div>
      </div>
    )}
  </div>
  )
}

export default AnecdoteList