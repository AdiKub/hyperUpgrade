export const initialState = {
  cotegoryPCs: [],
  responseStatuses: {
    isSuccess: false,
    isModalOpen: false,
    message: '',
    title: '',
  },
};

export const getState = (state = initialState) => state || initialState;
