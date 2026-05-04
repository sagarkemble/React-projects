import type { VideoData } from "./VideoData";

export interface ApiResponse {
  statusCode: number;

  data: {
    page: number;
    limit: number;
    totalPages: number;
    previousPage: boolean;
    nextPage: boolean;
    totalItems: number;
    currentPageItems: number;

    data: VideoData[];
  };

  message: string;
  success: boolean;
}
