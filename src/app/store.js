import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from '../features/cards/cardsSlice'
import tasksReducer from '../features/tasks/tasksSlice'

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    tasks: tasksReducer,
  }
})