export const setCocktailList = (array) => {
  return (dispatch) => {
    dispatch({
      type: "SETCOCKTAILLIST",
      payload: array,
    });
  };
};

export const setClickOnMenu = (boolean) => {
  return (dispatch) => {
    dispatch({
      type: "SET_CLICK_ON_MENU",
      payload: boolean,
    });
  };
};
