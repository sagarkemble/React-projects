function Loader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="relative flex h-24 w-24 items-center justify-center">
        <div className="absolute h-24 w-24 animate-ping rounded-full bg-[#4f8cff]/20" />

        <div className="h-16 w-16 animate-spin rounded-full border-[3px] border-white/[0.08] border-t-[#53d6ff]" />
      </div>
    </div>
  );
}

export default Loader;
