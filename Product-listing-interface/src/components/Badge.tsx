function Badge({
  itemName,
  setSearchItem,
}: {
  itemName: string;
  setSearchItem: React.Dispatch<React.SetStateAction<string>>;
}) {
  function handleClick() {
    setSearchItem(itemName);
  }

  return (
    <button
      onClick={handleClick}
      className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm uppercase tracking-[0.25em] text-white backdrop-blur-xl transition-all duration-300 hover:border-[#36F4A4] hover:bg-[#36F4A4] hover:text-black"
    >
      {itemName}
    </button>
  );
}

export default Badge;
