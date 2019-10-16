import {
  take, put, call, fork,
} from 'redux-saga/effects';
import api from '../../services/api';
import * as actions from './actions';
import * as actionTypes from './actionTypes';

export function* getPcsByCotegoryRequest(requestParams) {
 
  try {
    const response = yield call(api.GET, '/'+ requestParams)
    yield put(actions.getPcsByCotegorySuccess(response));
  } catch (responseError) {
    yield put(actions.getPcsByCotegoryFailure(responseError));
  }
}

export function* watchGetPcsByCotegoryRequest() {
  while (true) {
    const { requestParams } = yield take(actionTypes.GET_PCS_BY_COTEGORY_START);
    yield call(getPcsByCotegoryRequest, requestParams);
  }
}

export default function* () {
  yield fork(watchGetPcsByCotegoryRequest);
}
