import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface ActivityState {
    data: Post[];
    loading: boolean;
    error: string | null;
}

const initialState: ActivityState = {
    data: [],
    loading: false,
    error: null,
}

const activitySlice = createSlice({
    name: 'activity',
    initialState,
    reducers:{
        fetchTasks: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchTasksSuccess: (state, action: PayloadAction<Post[]>) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchTasksFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchTasks, fetchTasksSuccess, fetchTasksFailure } = activitySlice.actions;

export default activitySlice.reducer;