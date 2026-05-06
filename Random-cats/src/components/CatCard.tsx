import type * as ApiResponse from "../types/ApiResponse";

function CatCard({ catDetails }: { catDetails: ApiResponse.CatDetails }) {
  return (
    <article className="overflow-hidden rounded-[28px] bg-white shadow-[rgba(0,0,0,0.08)_0px_8px_24px] transition-all duration-300 hover:-translate-y-1">
      <div className="relative">
        <img
          src={catDetails.image}
          alt={catDetails.name}
          className="h-[340px] w-full object-cover"
        />

        <div className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#29ABE2]">
            {catDetails.origin}
          </p>
        </div>
      </div>

      <div className="p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-[#202020]">
              {catDetails.name}
            </h2>

            <p className="mt-2 text-sm font-semibold text-[#666666]">
              Life Span · {catDetails.life_span} years
            </p>
          </div>

          <div className="rounded-full bg-[#E8F7FF] px-4 py-2">
            <p className="text-sm font-bold text-[#29ABE2]">
              {catDetails.weight.metric} kg
            </p>
          </div>
        </div>

        <p className="mt-6 text-[15px] leading-7 text-[#555555]">
          {catDetails.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {catDetails.temperament
            .split(",")
            .slice(0, 4)
            .map((trait) => (
              <span
                key={trait}
                className="rounded-full bg-[#FFF2EB] px-4 py-2 text-xs font-bold text-[#FF6433]"
              >
                {trait}
              </span>
            ))}
        </div>
      </div>
    </article>
  );
}

export default CatCard;
