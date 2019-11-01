import {
  take, put, call, fork,
} from 'redux-saga/effects';
//import api from '../../services/api';
import * as actions from './actions';
import * as actionTypes from './actionTypes';

export function* setDeliveryRequest(delivForm) {

  try {
    const cart = JSON.parse(localStorage.getItem('pcCart'));
    const delivObj = {whom: delivForm, what: cart};
    yield put(actions.setDeliverySuccess(delivObj));
  } catch (responseError) {
    yield put(actions.setDeliveryFailure(responseError));
  }
}

export function* watchSetDeliveryRequest() {
  while (true) {
    const { delivForm } = yield take(actionTypes.SET_DELIVERY_START);
    yield call(setDeliveryRequest, delivForm);
  }
}

export default function* () {
  yield fork(watchSetDeliveryRequest);
}
