export const setCocktailList = (array) => {
  return (dispatch) => {
    dispatch({
      type: "SETCOCKTAILLIST",
      payload: array,
    });
  };
};
