import { createSlice } from '@reduxjs/toolkit'

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: [
            { id: 1, name: 'learn react' },
            { id: 2, name: 'apply knowledge' },
        ],
    },
    reducers: {
        addTask(state, action) {
            const newId = state.items.length > 0 ? Math.max(...state.items.map(t => t.id)) + 1: 1;
            state.items.push({ id: newId, name: action.payload });
        },
        deleteTask(state, action) {
            state.items = state.items.filter(task => task.id !== action.payload);
        },
        editTask(state, action) {
            const { id, name } = action.payload;
            const task = state.items.find(t => t.id === id);
            if (task) {
                task.name = name;
            }
        },
    },
});

export const { addTask, deleteTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;