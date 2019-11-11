
import { initialState } from './selectors';
import * as actionTypes from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_MAIN_IMAGE_SUCCESS:
      return {
        ...state,
        mainImage: action.fileName,
      };
    default:
      return state;
  }
};
