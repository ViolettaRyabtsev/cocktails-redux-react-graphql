import "./recipes.scss";
import { useSelector } from "react-redux";
import CocktailComponent from "../cocktail-component/CocktailComponent";
export const Recipes = () => {
  const store = useSelector((state) => state);

  return (
    <div>
      <div className="recipes-container">
        <div className="img-text">
          <h1>Cocktails Recipes</h1>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </h4>
        </div>
      </div>
      <div className="recipes-container-menu">
        {store.cocktails.map((object) => (
          <CocktailComponent cocktailObject={object} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
