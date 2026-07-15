import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  cards: [
    {
      id: uuidv4(),
      name: 'Test',
      taskCounts: 0,
      taskIds : [10, 12, 4]
    }
  ],
}

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers : {
    addCard: (state, action) => {
      state.cards.push(action.payload)
    },
    deleteCard: (state, action) => {
      state.cards = state.cards.filter((card, id) => card.id !== action.payload);
    }
  }
});

export const { addCard, deleteCard } = cardsSlice.actions;
export default cardsSlice.reducer;