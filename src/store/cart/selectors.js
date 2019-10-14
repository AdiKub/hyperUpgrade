export const initialState = {
  cart: {
    mega: {
      firstName: '',
    },
  },
};

export const getState = (state = initialState) => state || initialState;
