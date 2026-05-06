function Loader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex items-center gap-3">
        <div className="h-2 w-2 animate-pulse rounded-full bg-[#11ff99]" />

        <p className="text-sm tracking-[0.25em] text-[#888e90] uppercase">
          Loading Quotes
        </p>
      </div>
    </div>
  );
}

export default Loader;
