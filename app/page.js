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
    <div className="bg-slate-600 grid grid-cols-4 h-screen">
      {product.items.map((e) => (
        <div className="bg-white m-4 p-4 h-[480px]" key={e.sys.id}>
          {product.includes.Asset.map((elem) => (
            <div key={e.fields.image.sys.id}>
              {/* If the IDs of items.image.id % include.Asset.sys.id match then print that particular image*/}
              {e.fields.image.sys.id == elem.sys.id ? (
                <Image
                  src={"https:" + elem.fields.file.url}
                  alt=""
                  width={400}
                  height={400}
                  className="h-44"
                />
              ) : (
                ""
              )}
            </div>
          ))}
          <h1 className="text-2xl font-semibold">{e.fields.title}</h1>
          <p className="text-gray-500 text-sm font-normal">
            {/* To call the rich we must have to install the following react packege */}
            {/* Otherwise it  will not work */}
            {documentToReactComponents(e.fields.descriptions)}
            <h2 className="text-lg font-medium text-slate-800">
              Size: {e.fields.size}
            </h2>
            <h2 className="text-lg font-medium">PKR {e.fields.price}</h2>
          </p>
          <button className="border rounded-md px-4 py-2 bg-slate-500 font-semibold mt-3">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
