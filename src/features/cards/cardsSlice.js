import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
}

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers : {

  }
});

export default cardsSlice.reducer;