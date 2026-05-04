import type { VideoData } from "../types/VideoData";

function formatViewCount(count: string): string {
  const n = parseInt(count);
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M views`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K views`;
  return `${n} views`;
}

function formatDuration(duration: string): string {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return "";
  const h = match[1] ? parseInt(match[1]) : 0;
  const m = match[2] ? parseInt(match[2]) : 0;
  const s = match[3] ? parseInt(match[3]) : 0;
  if (h > 0)
    return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function timeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);
  if (diff < 60) return `${diff} seconds ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)} days ago`;
  if (diff < 31536000) return `${Math.floor(diff / 2592000)} months ago`;
  return `${Math.floor(diff / 31536000)} years ago`;
}

function VideoCard({ videoData }: { videoData: VideoData }) {
  const snippet = videoData?.items?.snippet;
  const stats = videoData?.items?.statistics;
  const content = videoData?.items?.contentDetails;

  if (!snippet) return null;

  const thumbnail =
    snippet.thumbnails?.medium?.url || snippet.thumbnails?.default?.url || "";
  const title = snippet.title || "";
  const channel = snippet.channelTitle || "";
  const publishedAt = snippet.publishedAt || "";
  const viewCount = stats?.viewCount || "0";
  const duration = content?.duration || "";

  return (
    <div className="group cursor-pointer">
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#272727]">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:rounded-none transition-all duration-200"
          loading="lazy"
        />
        {duration && (
          <span className="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
            {formatDuration(duration)}
          </span>
        )}
      </div>

      <div className="flex gap-3 mt-3">
        <div className="flex-shrink-0">
          <div className="w-9 h-9 rounded-full bg-[#4285f4] flex items-center justify-center text-sm font-semibold text-white">
            {channel.charAt(0).toUpperCase()}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-white text-sm font-medium leading-5 line-clamp-2 mb-1 group-hover:text-[#ccc] transition-colors">
            {title}
          </h3>
          <p className="text-[#aaa] text-sm hover:text-white cursor-pointer transition-colors">
            {channel}
          </p>
          <p className="text-[#aaa] text-sm">
            {formatViewCount(viewCount)} • {timeAgo(publishedAt)}
          </p>
        </div>

        <button className="opacity-0 group-hover:opacity-100 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#272727] transition-all -mt-1">
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default VideoCard;
