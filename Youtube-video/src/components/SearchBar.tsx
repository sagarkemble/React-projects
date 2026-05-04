import { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center flex-1 max-w-[600px] mx-4 sm:mx-8">
      <div className="flex flex-1">
        <div className="flex flex-1 items-center border border-[#303030] rounded-l-full bg-[#121212] focus-within:border-[#1c62b9] overflow-hidden">
          <span className="pl-4 text-[#aaa] hidden xs:flex"></span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder-[#aaa] outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="pr-3 text-[#aaa] hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          )}
        </div>

        <button className="px-5 bg-[#222222] border border-l-0 border-[#303030] rounded-r-full hover:bg-[#3f3f3f] transition-colors flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.87 20.17l-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
          </svg>
        </button>
      </div>

      <button className="ml-3 w-10 h-10 flex items-center justify-center rounded-full bg-[#222222] hover:bg-[#3f3f3f] transition-colors flex-shrink-0">
        <svg
          className="w-5 h-5 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
        </svg>
      </button>
    </div>
  );
}

export default SearchBar;
