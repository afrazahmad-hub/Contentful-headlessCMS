import Image from "next/image";
import Link from "next/link";

interface Recipe {
  fields: {
    title: string;
    slug: string;
    featureImage: string;
    ingrediants: string;
    cookingTime: number;
    thumbnail: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  // destructure the values of recipe
  const { title, slug, featureImage, ingrediants, cookingTime, thumbnail } =
    recipe.fields;

  //console.log("Thumbnail", thumbnail.fields.file.url); // deep down to the thumbnail to get url of Image

  return (
    <div>
      <div>
        <div>
          {/* Image - thumbnail */}
          <Image
            src={"http:" + thumbnail.fields.file.url}
            alt="Pic thumbnail"
            priority={false}
            width={400}
            height={200}
          />
        </div>
        <div>
          <div>
            <h4 className="text-lg mt-3 font-bold"> {title} :</h4>
            <p>Will take aprox {cookingTime} minutes to cook</p>
          </div>
          <div className="mt-4">
            {/* ---Slug--- */}
            <Link
              href={"/recipes/" + slug}
              className="px-4 py-2 rounded-lg bg-rose-400 hover:text-rose-200 duration-300 "
            >
              Cook this
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
