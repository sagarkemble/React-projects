import { useState } from "react";
import type * as ApiResponse from "../types/ApiResponse";

function QuoteCard({ quote }: { quote: ApiResponse.QuoteDetails }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(quote.content);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1800);
  }

  return (
    <article
      onClick={handleCopy}
      className="group cursor-pointer rounded-[12px] border border-white/[0.08] bg-[#0a0a0c] p-8 transition-all duration-500 hover:border-white/[0.14] hover:bg-[#101012]"
    >
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-[#11ff99]" />

          <p className="text-xs uppercase tracking-[0.25em] text-[#888e90]">
            Quote Archive
          </p>
        </div>

        <p className="text-xs text-[#888e90] transition-opacity duration-300 group-hover:opacity-100 opacity-0">
          {copied ? "Copied" : "Click to copy"}
        </p>
      </div>

      <blockquote className="max-w-4xl text-2xl leading-[1.4] tracking-[-1px] text-[#fcfdff] sm:text-3xl">
        “{quote.content}”
      </blockquote>

      <div className="mt-10 flex items-center justify-between border-t border-white/[0.06] pt-6">
        <div>
          <p className="text-sm text-[#fcfdff]">{quote.author}</p>

          <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[#888e90]">
            Editorial Collection
          </p>
        </div>

        <div className="rounded-full border border-white/[0.08] bg-[#101012] px-4 py-2 text-xs text-[#a1a4a5]">
          {quote.tags[0]}
        </div>
      </div>
    </article>
  );
}

export default QuoteCard;
