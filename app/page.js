import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

async function getProducts() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFULL_ACCESS_KEY}&content_type=products`,
    { cache: "no-store" }
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Products() {
  const product = await getProducts();
  console.log(product);

  return (
    <div className="bg-slate-600 grid grid-cols-4">
      {product.items.map((e) => (
        <div className="bg-white m-4 p-4" key={e.sys.id}>
          <Image
            src={e.fields.image}
            alt="shirt pic"
            width={200}
            height={200}
          />
          <h1 className="text-2xl font-semibold">{e.fields.title}</h1>
          <p className="text-gray-500 text-sm font-normal">
            {/* To call the rich we must have to install the following react packege */}
            {/* Other will not work */}
            {documentToReactComponents(e.fields.descriptions)}
          </p>
          <h2 className="text-lg font-medium">PKR {e.fields.price}</h2>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
