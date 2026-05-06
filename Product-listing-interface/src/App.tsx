import { useEffect, useState } from "react";
import type * as ApiResponse from "./types/ApiResponse";
import Loader from "./components/Loader";
import ProductCard from "./components/ProductCard";
import Badge from "./components/Badge";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchItem, setSearchItem] = useState("laptop");
  const [productDetails, setProductDetails] =
    useState<ApiResponse.ProductData | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);

      const response = await fetch(
        `https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=${searchItem}`,
      );

      const parsedResponse: ApiResponse.ApiResponse = await response.json();

      setProductDetails(parsedResponse.data);
      setIsLoading(false);
    }

    fetchProducts();
  }, [searchItem]);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(54,244,164,0.12),transparent_35%),radial-gradient(circle_at_bottom,rgba(16,38,32,0.8),transparent_40%)]" />

      <section className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-12">
        <nav className="mb-20 flex items-center justify-between border-b border-white/5 pb-6">
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            ShopSphere
          </h1>

          <button className="rounded-full border border-white/10 bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#36F4A4]">
            Explore
          </button>
        </nav>
        <div className="mb-20 max-w-4xl text-left">
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-[#36F4A4]">
            Premium Commerce Experience
          </p>

          <h2 className="text-5xl font-extralight leading-none tracking-tight text-white sm:text-7xl lg:text-8xl">
            Discover products in a cinematic storefront.
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            A Shopify-inspired dark commerce experience crafted with layered
            depth, glass surfaces, glowing accents, and immersive product cards.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-4">
          <Badge itemName="laptop" setSearchItem={setSearchItem} />

          <Badge itemName="phone" setSearchItem={setSearchItem} />

          <Badge itemName="watch" setSearchItem={setSearchItem} />

          <Badge itemName="gaming" setSearchItem={setSearchItem} />

          <Badge itemName="fashion" setSearchItem={setSearchItem} />

          <Badge itemName="shoes" setSearchItem={setSearchItem} />

          <Badge itemName="bag" setSearchItem={setSearchItem} />
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {productDetails?.data.map((p) => (
              <ProductCard key={p.id} productData={p} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
export default App;
