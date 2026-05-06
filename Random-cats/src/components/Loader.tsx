function Loader() {
  return (
    <div className="flex min-h-[500px] items-center justify-center">
      <div className="relative">
        <div className="h-20 w-20 animate-bounce rounded-full bg-[#29ABE2]" />

        <div className="absolute inset-0 animate-ping rounded-full bg-[#29ABE2]/20" />
      </div>
    </div>
  );
}

export default Loader;
