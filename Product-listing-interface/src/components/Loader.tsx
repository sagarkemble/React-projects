function Loader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="relative flex h-28 w-28 items-center justify-center">
        <div className="absolute h-28 w-28 animate-ping rounded-full bg-[#36F4A4]/10" />

        <div className="h-20 w-20 animate-spin rounded-full border-[3px] border-[#1E2C31] border-t-[#36F4A4]" />
      </div>
    </div>
  );
}

export default Loader;
