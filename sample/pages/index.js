import React, { useState } from "react";
import Head from "next/head";
import Header from "@/Components/header";
import RecipeHome from "@/Components/recipe-homepage";
import recipes from "@/Components/recipe.json";
import fs from "fs";
import path from "path";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const SearchedRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rizzy-P | Pinoy Recipes with Love</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="globals.css" />
      </Head>

      <Header searchTerm={searchTerm} handleChange={handleChange} />
      {SearchedRecipes.map((recipe) => (
        <RecipeHome key={recipe.id} recipe={recipe} />
      ))}
    </>
  );
}

export default Home;
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "./Components/recipe.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const recipes = JSON.parse(fileContent);

  return {
    props: {
      recipes,
    },
  };
}
