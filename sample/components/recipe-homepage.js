import Link from "next/link";
import styles from '@/styles/custom.module.scss';



export default function RecipeHome({ recipe }) {
  return (
    <>
     <div  class="recipe-card-container">
        <div className="recipe-card-list1">
        <div className="recipe-card" key={recipe.id}>
          <img
            className="recipe-card-img"
            src={recipe.images.image2}
            alt={recipe.name}
          />
          <div className="recipe-card-container">
            <div class="recipe-card-list1">
              
            <p className={styles["protein-type-label-custom"]}>{recipe.type}</p>
            <p className={styles["recipe-title-style-custom"]}>{recipe.name}</p>
            <Link className={styles["recipe-button-custom"]} href={`/${recipe.id}`}>
              <button class="recipe-button">view recipe</button>
            </Link>
            <p className={styles["recipe-info-custom"]}>
              {recipe.time} | {recipe.size}
            </p>
          </div>
        </div>
      </div>
     </div>
     </div>
    </>
  );
}


