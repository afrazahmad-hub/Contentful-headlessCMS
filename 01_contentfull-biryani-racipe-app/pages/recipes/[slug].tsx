import { createClient } from "contentful";
import Image from "next/image";
import Link from "next/link";
// ------------for utilizing rich text
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// Connent to contentfull
const client = createClient({
  space: "43j1y94qhtg4",
  accessToken: "-skVwWa-u8C-jqa0hfXQP7OQaOZhJ2azPslnx2a38LE",
});

// By this function we will get all the slug values at build time
export async function getStaticPaths() {
  // get specific field from contentful i.e "recipes"
  const res = await client.getEntries({
    content_type: "recipes",
  });

  // get slug values by map() function
  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false, // if no any entry against slug, fallback will through 404 error
  };
}

// By this function we get the single value of the slug at a time
export async function getStaticProps({ params }: { params: any }) {
  const { items } = await client.getEntries({
    content_type: "recipes",
    "fields.slug": params.slug,
  });

  return {
    props: { recipes: items[0] },
  };
}

interface Recipe {
  fields: {
    featureImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    title: string;
    cookingTime: number;
    ingrediants: string;
    method: any;
  };
}
export default function RecipeDetails({ recipes }: { recipes: Recipe }) {
  const { featureImage, title, cookingTime, ingrediants, method } =
    recipes.fields;
  console.log("Recipes: ", recipes);
  console.log("featuredImage: ", featureImage.fields.file.url);

  return (
    <div className="bg-yellow-400 p-8 ">
      <div>
        <Image
          src={"http:" + featureImage.fields.file.url}
          width={600}
          height={300}
          alt="Biryani pic"
        />
        <h2 className="text-2xl font-bold">{title} </h2>
      </div>
      <div>
        <p className="text-lg text-gray-700">
          Take about {cookingTime} mins to cook.{" "}
        </p>
        <div className="flex">
          <h3 className="font-bold">Ingrediants: </h3>
          <div className="space-x-2 ml-2">{ingrediants}</div>
        </div>
      </div>
      <div>
        <h3 className="font-bold">Method:</h3>
        {/* ----------Rich Text------------- */}
        {documentToReactComponents(method)}
      </div>
      <div className="mt-4">
        <Link href={"/"} className="px-4 py-2 rounded-lg bg-slate-400">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}
