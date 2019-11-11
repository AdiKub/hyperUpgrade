import {
  take, put, call, fork,
} from 'redux-saga/effects';
import * as actions from './actions';
import * as actionTypes from './actionTypes';

export function* setMainImageStart(fileName) {
    yield put(actions.setMainImageSuccess(fileName));
}

export function* watchSetMainImageStart() {
  while (true) {
    const { fileName } = yield take(actionTypes.SET_MAIN_IMAGE_START);
    yield call(setMainImageStart, fileName);
  }
}

export default function* () {
  yield fork(watchSetMainImageStart);
}
