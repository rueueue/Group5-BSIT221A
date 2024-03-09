import Link from "next/link";
import fs from 'fs';
import path from 'path';

export default function RecipeHome({ recipes }) {
  return (
    <>
      {recipes && recipes.map((recipe) => {
        return(
        <div className="recipe-card-container" key={recipe.id}>
          <div className="recipe-card-list1">
            <div className="recipe-card">
              <img
                 className="recipe-card-img"
                 src={`assets/${recipe.image.image2}`}
                 alt={recipe.name}
              />
              <div className="recipe-card1">
                <p className="protein-type-label">{recipe.type}</p>
                <p className="recipe-title-style">{recipe.name}</p>
                <button className="recipe-button">view recipe</button>
                <p className="recipe-info">{recipe.time} | {recipe.size}</p>
              </div>
            </div>
          </div>
        </div>
        );
      })}
    </>
  );
}



export async function getStaticProps() {
  const filePath = path.join(process.cwd(), './components/recipe.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContent);

  console.log(data);

  return {
    props: {
      recipes: data,
    },
  };
}

