export const initialState = {
  token: {
    token: '',
  },
  isLogined: false,
  user: {
    username: '',
  },
  responseStatuses: {
    isSuccess: false,
    isModalOpen: false,
    message: '',
    title: '',
  },
};

export const getState = (state = initialState) => state || initialState;
