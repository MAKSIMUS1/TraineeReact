import axios, { AxiosResponse } from "axios";
import { fetchTasks, fetchTasksFailure, fetchTasksSuccess, Post } from "../reducers/ActivitySlice";
import { call, put, takeLatest } from "redux-saga/effects";

function fetchPostsApi(){
    return axios.get<Post[]>(
        'https://jsonplaceholder.typicode.com/posts'
    );
}

function* fetchTasksWorkerSaga(): Generator<any, void, AxiosResponse<Post[]>> {
  try {
    const response = yield call(fetchPostsApi);
    yield put(fetchTasksSuccess(response.data));
  } catch (error) {
    yield put(fetchTasksFailure('Ошибка получения данных'));
  }
}

export function* activitySaga() {
  yield takeLatest(fetchTasks.type, fetchTasksWorkerSaga);
}