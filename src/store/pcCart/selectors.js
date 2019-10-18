export const initialState = {
  cotegoryPCs: [],
  selectedPc: {specifications:{}},
  pcCart: JSON.parse(localStorage.getItem('pcCart'))
};

export const getState = (state = initialState) => state || initialState;
