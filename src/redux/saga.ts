import { all, call, takeLatest, put, delay } from "redux-saga/effects";
import { getBirthdaysByDate } from "../api/api";
import {
  fetchUsers as fetchUserAction,
  fetchUsersFailed,
  FetchUsersProps,
  fetchUsersSucceded,
  setLoading,
} from "./birthdaysReducer";

export function* fetchUserWatcher() {
  //@ts-ignore
  yield takeLatest(fetchUserAction.toString(), fetchUsers);
}

function* fetchUsers({payload}: any) {
  yield put(setLoading(true));

  try {
    //@ts-ignore
    const res = yield call(getBirthdaysByDate, payload);
    yield console.log(res)
    yield put(fetchUsersSucceded(res.data.users));
    yield put(setLoading(false));
  } catch (e) {
    yield put(fetchUsersFailed(e.message));
    yield put(setLoading(false));
  }
}

export default function* rootSaga() {
  yield all([fetchUserWatcher()]);
}
