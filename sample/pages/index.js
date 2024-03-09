import Head from "next/head";
import Header from "@/components/header";
import RecipeHome from "@/pages/recipe-homepage";


function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rizzy-P | Pinoy Recipes with Love</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="globals.css" />
      </Head>

      <Header />
      <RecipeHome />
      
    </>
  );
}

export default Home;




