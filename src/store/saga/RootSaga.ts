import { all } from "redux-saga/effects";
import { activitySaga } from "./ActivitySaga";

export function* rootSaga() {
    yield all([
        activitySaga(),
    ]);
}