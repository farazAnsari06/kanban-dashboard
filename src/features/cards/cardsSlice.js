import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [
    {
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
  }
});

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;