import Head from "next/head";
import Header from "@/components/header";
import RecipeHome from "@/components/recipe-homepage";

function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rizzy-P | Pinoy Recipes with Love</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="globals.css" />
      </Head>

      <Header />
      <RecipeHome />
    </>
  );
}

export default Home;
