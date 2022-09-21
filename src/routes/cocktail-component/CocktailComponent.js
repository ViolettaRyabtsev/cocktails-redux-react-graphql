import "./cocktail-component.scss";

const CocktailComponent = (props) => {
  const { name, id, img, recipeBody, category } = props.cocktailObject;
  return (
    <div className="cocktail-component-container">
      <img src={img} alt="cocktail"></img>
      <div className="cocktail-component-text">
        <h1>{name}</h1>
        <p>{recipeBody}</p>
      </div>
    </div>
  );
};

export default CocktailComponent;
