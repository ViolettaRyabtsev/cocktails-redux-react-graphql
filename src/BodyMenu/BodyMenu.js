import "./body-menu.scss";

const data = [
  "Easy Rum Cocktails",
  "Easy Gin Cocktails",
  "Easy Vodka Drinks",
  "Champagne Drinks",
  "Modern Classics",
  "Blended Drinks",
  "Classic Cocktails",
  "Tiki Drinks",
  "Beach Cocktails",
];

const BodyMenu = () => {
  return (
    <div className="body-container">
      <div className="body-img">
        <div className="img-text">
          <h1>Menu</h1>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </h4>
        </div>
        <div className="clouds">
          <img
            src="https://s3.amazonaws.com/www.svitlola.com/images/cloud1.png"
            style={{ "--i": "1" }}
            alt="cloud"
          />
          <img
            src="https://s3.amazonaws.com/www.svitlola.com/images/cloud2.png"
            style={{ "--i": "2" }}
            alt="cloud"
          />

          <img
            src="https://s3.amazonaws.com/www.svitlola.com/images/cloud5.png"
            style={{ "--i": "5" }}
            alt="cloud"
          />
          <img
            src="https://s3.amazonaws.com/www.svitlola.com/images/cloud1.png"
            style={{ "--i": "10" }}
            alt="cloud"
          />

          <img
            src="https://s3.amazonaws.com/www.svitlola.com/images/cloud4.png"
            style={{ "--i": "4" }}
            alt="cloud"
          />
          <img
            src="https://s3.amazonaws.com/www.svitlola.com/images/cloud3.png"
            style={{ "--i": "3" }}
            alt="cloud"
          />
        </div>
      </div>
      <div className="cocktails-menu">
        <h1>Cocktails Menu</h1>

        <h4>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h4>

        <div className="menu-container">
          {data.map((name) => (
            <div className="menu-container-img">
              <img src="../idrink-64.png" alt="logo-cocktail"></img>
              <h2>{name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyMenu;

// CREATE TABLE Ingredients (
// id int auto_increment primary key,
// name varchar(200)NOT NULL,
// amount varchar(10) NOT null,
// type varchar(10) NOT null,
// text varchar(100) NOT null
// );

// CREATE TABLE tblDrinks
// (
// drink_id int auto_increment primary key,
// name varchar(500) NOT null,
// recipeBody varchar(1000) NOT null
// );
