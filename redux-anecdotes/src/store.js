import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './reducers/notificationReducer';
import anecdoteReducer from './reducers/anecdoteReducer'



export default configureStore({ reducer: { anecdotes: anecdoteReducer, notification: notificationReducer } });



