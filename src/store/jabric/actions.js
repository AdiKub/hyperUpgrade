import * as actionTypes from './actionTypes';

export const setMainImageStart = fileName => ({
  type: actionTypes.SET_MAIN_IMAGE_START,
  fileName,
});
export const setMainImageSuccess = fileName => ({
  type: actionTypes.SET_MAIN_IMAGE_SUCCESS,
  fileName,
});
