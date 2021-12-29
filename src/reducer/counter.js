const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENET':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
};
export default counterReducer;