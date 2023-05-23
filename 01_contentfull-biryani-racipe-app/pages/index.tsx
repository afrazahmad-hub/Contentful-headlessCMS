import { createClient } from "contentful";

// internal imports
import RecipeCard from "@/Components/RecipeCard";
import Footer from "../Components/Footer";

export async function getStaticProps() {
  // To access the data from the contentful
  const client = createClient({
    space: "43j1y94qhtg4",
    accessToken: "-skVwWa-u8C-jqa0hfXQP7OQaOZhJ2azPslnx2a38LE",
  });

  const res = await client.getEntries({ content_type: "recipes" });
  return { props: { recipes: res.items } };
}

const index = (recipes: any) => {
  const recps = recipes.recipes;
  console.log(recps);

  return (
    <div className=" bg-yellow-400 h-full w-full p-6 ">
      <h2 className="text-2xl font-black mb-10 text-gray-700 ">
        Cook a Biryani with Afraz &#9829; .....
      </h2>
      <div className="grid md:grid-cols-2 space-y-12">
        {recps.map((recipe: any) => (
          // Passing the data to RecipCrad component
          <RecipeCard key={recipe.sys.id} recipe={recipe} />
          // <div key={recipe.sys.id}>{recipe.fields?.title}</div>
        ))}
      </div>
      <footer className="mt-8">
        <Footer />
      </footer>
    </div>
  );
};

export default index;
