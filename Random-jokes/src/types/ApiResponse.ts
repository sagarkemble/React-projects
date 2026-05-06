// Individual joke object
export interface JokeDetails {
  id: number;
  content: string;
  categories: string[];
}

// Inner data object
export interface JokeData {
  page: number;
  limit: number;
  totalPages: number;
  previousPage: boolean;
  nextPage: boolean;
  totalItems: number;
  currentPageItems: number;
  data: JokeDetails[];
}

// Outer API response
export interface ApiResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: JokeData;
}
