import React, { useState } from "react";
import Head from "next/head";
import Header from "@/components/header";
import RecipeHome from "@/components/recipe-homepage";
import Filter from "@/components/filters";
import recipes from "@/components/recipe.json";
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
      <Filter />
      {SearchedRecipes.map((recipe) => (
        <RecipeHome key={recipe.id} recipe={recipe} />
      ))}
    </>
  );
}

export default Home;
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "./components/recipe.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const recipes = JSON.parse(fileContent);

  return {
    props: {
      recipes,
    },
  };
}
