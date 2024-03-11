import { useRouter } from "next/router";
import RecipePage from "@/pages/recipe";

const RecipeContent = () => {
  const router = useRouter();
  const { id } = router.query;

  const recipe = { id: id };

  return (
    <>
      <RecipePage recipe={recipe} />;
    </>
  );
};

export default RecipeContent;
