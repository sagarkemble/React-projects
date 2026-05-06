import { useState } from "react";
import type * as ApiResponse from "../types/ApiResponse";
import Toast from "./Toast";

function JokeCard({ joke }: { joke: ApiResponse.JokeDetails }) {
  const [showToast, setShowToast] = useState(false);

  async function copyToClipboard() {
    await navigator.clipboard.writeText(joke.content);

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  }

  return (
    <>
      <article
        onClick={copyToClipboard}
        className="group cursor-pointer rounded-[14px] border border-[rgba(226,226,226,0.18)] bg-[rgba(255,255,255,0.03)] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(226,226,226,0.35)] hover:bg-[rgba(255,255,255,0.05)]"
      >
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.3em] text-[#868584]">
            Daily Joke
          </p>

          <p className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-[11px] uppercase tracking-[0.25em] text-[#868584]">
            Click to Copy
          </p>
        </div>

        <p className="mt-6 max-w-3xl text-2xl leading-[1.5] tracking-[-0.5px] text-[#faf9f6] transition-transform duration-500 group-hover:translate-x-1">
          {joke.content}
        </p>
      </article>

      {showToast && <Toast message="Copied to clipboard" />}
    </>
  );
}

export default JokeCard;
