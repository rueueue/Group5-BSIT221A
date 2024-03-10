import recipes from "./recipe.json";
import Link from "next/link";

function RecipePage({ recipe }) {
  const ID = parseInt(recipe.id);
  const chosenRecipe = recipes.find((r) => r.id === ID);

  if (!chosenRecipe) {
    return <div>Recipe not found!</div>;
  }
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Recipes</title>
      <div className="navbar">
        <Link href="/" passHref>
          <div className="arrow">
            <i className="fa-solid fa-chevron-left icon" />
          </div>
        </Link>
        <div className="img2-logo">
          <img src="img/logo.png" alt="" />
        </div>
      </div>
      <div className="recipe-desc">
        <div className="img3-rcp">
          <img src={chosenRecipe.images.image2} alt="" />
        </div>
        <div className="mobtab-flex">
          <div className="img4-rcp-mobtab">
            <img src="img/tinola-mobtab.png" alt="" />
          </div>
          <div className="title-serve">
            <div className="title">
              <h1>{chosenRecipe.name}</h1>
            </div>
            <div className="serving">
              <span>Serving size: {chosenRecipe.size}</span>
            </div>
          </div>
          <div className="infos">
            <div className="info1">
              <div className="ct">
                <b>Cooking Time:</b> <span>{chosenRecipe.time}</span>
              </div>
              <div className="ai">
                <b>Allergen Information: </b>{" "}
                <span>{chosenRecipe.allergenInformation}</span>
              </div>
            </div>
            <div className="info2">
              <div className="sl">
                <b>Skill Level:</b> <span>{chosenRecipe.skill}</span>
              </div>
              <div className="flav">
                <b>Flavor: </b>
                <span>{chosenRecipe.flavor}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line">
        <hr />
      </div>
      <div className="nutri">
        <div className="nutri-title">
          {" "}
          <h2>nutrition</h2> (estimated)
        </div>
        <div className="nutri-info">
          <ul>
            <li>
              <span>Calories &gt;</span> {chosenRecipe.nutrition.calories}
            </li>
            <li>
              <span>Protein &gt;</span> {chosenRecipe.nutrition.protein}{" "}
            </li>
            <li>
              <span>Carbohydrates &gt;</span>{" "}
              {chosenRecipe.nutrition.carbohydrates}
            </li>
            <li>
              <span>Fat &gt;</span> {chosenRecipe.nutrition.fat}
            </li>
          </ul>
        </div>
      </div>
      <div className="ingredients">
        <div className="ingr-title">
          <h2>ingredients</h2>
        </div>
        <div className="ingr-info">
          <ul>
            {Object.values(chosenRecipe.ingredients).map((ingredient, index) => (
              <li key = {index}>{ingredient}</li>
            )
            )}
          </ul>
        </div>
      </div>
      <div className="alternative">
        <div className="alt-title">
          <h2>alternative ingredients</h2>
        </div>
        <div className="alt-info">
        <ul>
            {Object.values(chosenRecipe.alternative).map((alt, index) => (
              <li key = {index}>{alt}</li>
            )
            )}
          </ul>
        </div>
      </div>
      <div className="line">
        <hr />
      </div>
      <div className="preparation">
        <div className="prep-title">
          <h2>preparation</h2>
        </div>
        <div className="prep-info">
        <ul>
            {Object.values(chosenRecipe.preparation).map((prep, index) => (
              <li key = {index}>{prep}</li>
            )
            )}
          </ul>
        </div>
      </div>
      <div className="storage">
        <div className="stg-title">
          <h2>storage and reheating instruction</h2>
        </div>
        <div className="stg-info">
        <ul>
            {Object.values(chosenRecipe.instruction).map((info, index) => (
              <li key = {index}>{info}</li>
            )
            )}
          </ul>
        </div>
      </div>
      <div className="note">
        <div className="note-title">
          <h2>note:</h2>
        </div>
        <div className="note-info">
          <ul>
            <li>{chosenRecipe.note}</li>
          </ul>
        </div>
      </div>
      <div className="line">
        <hr />
      </div>
      <div className="browse">
        <Link href="/" passHref>
          <div className="browse-btn">
            <button>Browse more recipes</button>
          </div>
        </Link>
      </div>
    </>
  );
}
export default RecipePage;