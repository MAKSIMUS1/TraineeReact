import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    email: string;
    password: string;
}

const initialState: AuthState = {
    email: '',
    password : ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setEmail(state, action: PayloadAction<string>) {
            state.email = action.payload;
        },
        setPassword(state, action: PayloadAction<string>) {
            state.password = action.payload;
        },
        resetAuth() {
            return initialState;
        },
    }
})

export const { setEmail, setPassword, resetAuth } = authSlice.actions
export default authSlice.reducer;