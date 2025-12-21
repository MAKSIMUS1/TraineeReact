import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/AuthSlice"
import authFormikReducer from "./reducers/AuthFormikSlice";
import activityReducer from "./reducers/ActivitySlice";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga/RootSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    authReducer,
    authFormikReducer,
    activityReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware);
    },
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;