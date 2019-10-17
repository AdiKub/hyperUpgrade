export const initialState = {
  cotegoryPCs: [],
  selectedPc: {specifications:{}}
};

export const getState = (state = initialState) => state || initialState;
