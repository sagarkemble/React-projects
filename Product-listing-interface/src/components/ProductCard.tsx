import type * as ApiResponse from "../types/ApiResponse";

function ProductCard({
  productData,
}: {
  productData: ApiResponse.ProductDetails;
}) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-[#1E2C31] bg-[#02090A] shadow-[rgba(0,0,0,0.1)_0px_0px_0px_1px,rgba(0,0,0,0.2)_0px_2px_2px,rgba(0,0,0,0.25)_0px_8px_24px,rgba(255,255,255,0.03)_0px_1px_0px_inset] transition-all duration-500 hover:-translate-y-2 hover:border-[#36F4A4]/30 hover:bg-[#061A1C]">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

        <img
          src={productData.thumbnail}
          alt={productData.title}
          className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute left-5 top-5 z-20 rounded-full border border-white/10 bg-black/60 px-4 py-2 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#36F4A4]">
            {productData.category}
          </p>
        </div>
      </div>

      <div className="space-y-6 p-6 text-left">
        <div>
          <h2 className="line-clamp-2 text-3xl font-extralight leading-tight tracking-tight text-white">
            {productData.title}
          </h2>

          <p className="mt-4 text-sm leading-7 text-zinc-400">
            Crafted for modern digital experiences with immersive visuals and
            premium build quality.
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Price
            </p>

            <h3 className="mt-2 text-4xl font-extralight text-white">
              ${productData.price}
            </h3>
          </div>

          <button className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-[#36F4A4] hover:shadow-[0_0_25px_rgba(54,244,164,0.35)]">
            View Product
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
