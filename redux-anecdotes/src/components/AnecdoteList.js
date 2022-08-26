import { useDispatch, useSelector } from 'react-redux'
import {appendVote } from '../reducers/anecdoteReducer'
import { addNotification, removeNotification } from '../reducers/notificationReducer'


const AnecdoteList = () => {

  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const vote = (obj) => {
    console.log('vote', obj.id)
    dispatch(appendVote(obj))
    dispatch(addNotification(`you voted '${obj.content}'`))
    setTimeout(() => {
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