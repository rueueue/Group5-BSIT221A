import Link from "next/link";

export default function RecipeHome({ recipe }) {
  return (
    <>
      <div className="recipe-card-list1">
        <div className="recipe-card" key={recipe.id}>
          <img
            className="recipe-card-img"
            src={recipe.images.image2}
            alt={recipe.name}
          />
          <div className="recipe-card1">
            <p className="protein-type-label">{recipe.type}</p>
            <p className="recipe-title-style">{recipe.name}</p>
            <Link href={`/${recipe.id}`}>
              <button className="recipe-button">view recipe</button>
            </Link>
            <p className="recipe-info">
              {recipe.time} | {recipe.size}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
