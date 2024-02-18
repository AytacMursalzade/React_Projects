import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../../Redux/counterSlice.js';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
