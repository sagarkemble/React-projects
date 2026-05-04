function SkeletonCard() {
  return (
    <div className="animate-pulse">
      <div className="w-full aspect-video rounded-xl bg-[#272727]" />

      <div className="flex gap-3 mt-3">
        <div className="w-9 h-9 rounded-full bg-[#272727] flex-shrink-0" />

        <div className="flex-1 space-y-2">
          <div className="h-4 bg-[#272727] rounded w-full" />
          <div className="h-4 bg-[#272727] rounded w-3/4" />
          <div className="h-3 bg-[#272727] rounded w-1/2 mt-1" />
        </div>
      </div>
    </div>
  );
}

function Loader() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
      {Array.from({ length: 12 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

export default Loader;
