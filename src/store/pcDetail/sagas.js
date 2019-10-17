import {
  take, put, call, fork,
} from 'redux-saga/effects';
import api from '../../services/api';
import * as actions from './actions';
import * as actionTypes from './actionTypes';

export function* getPcDetailRequest(requestParams) {
 
  try {
    const response = yield call(api.GET,'/'+requestParams)
    yield put(actions.getPcDetailSuccess(response));
  } catch (responseError) {
    yield put(actions.getPcDetailFailure(responseError));
  }
}

export function* watchGetPcDetailRequest() {
  while (true) {
    const { requestParams } = yield take(actionTypes.GET_PC_DETAIL_START);
    yield call(getPcDetailRequest, requestParams);
  }
}

export default function* () {
  yield fork(watchGetPcDetailRequest);
}
