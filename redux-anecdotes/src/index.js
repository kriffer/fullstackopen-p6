import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store'
import { Provider } from 'react-redux'
import App from './App'
 


// anecdoteService.getAll().then(anecdotes =>
//   anecdotes.forEach(anecdote => {
//     store.dispatch(appendAnecdote(anecdote))
//   }))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
