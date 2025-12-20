import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthFormikState {
    email: string;
    password: string;
}

const initialState: AuthFormikState = {
    email: '',
    password : ''
}

export const authFormikSlice = createSlice({
    name: 'authFormik',
    initialState,
    reducers: {
        setCredentials(state, action: PayloadAction<AuthFormikState>) {
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        resetAuth() {
            return initialState;
        },
    }
})

export const { setCredentials, resetAuth } = authFormikSlice.actions
export default authFormikSlice.reducer;