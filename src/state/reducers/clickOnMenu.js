const clickOnMenuReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_CLICK_ON_MENU":
      return { setClick: action.payload };
    default:
      return state;
  }
};

export default clickOnMenuReducer;
