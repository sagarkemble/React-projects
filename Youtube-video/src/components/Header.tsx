import SearchBar from "./SearchBar";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 h-14 bg-[#0f0f0f] border-b border-[#272727]">
      <div className="flex items-center gap-1 cursor-pointer">
        <button className="p-2 rounded-full hover:bg-[#272727] transition-colors">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>
        <img src={logo} alt="YouTube" />
      </div>

      <SearchBar />

      <div className="flex items-center gap-2">
        <button className="p-2 rounded-full hover:bg-[#272727] transition-colors">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
          </svg>
        </button>
        <div className="w-8 h-8 rounded-full bg-[#4285f4] flex items-center justify-center  text-sm font-medium cursor-pointer ml-1">
          <p className="translate-y-0.5">U</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
