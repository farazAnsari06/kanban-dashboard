import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id:10,
      name: 'Task 1',
      desc: 'This is task 1.',
      members: [],
      labels: [],
      dueDate: "2026-07-21T21:40:00.000Z",
    }
  ]
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    
  }
})

export default tasksSlice.reducer;