// Individual quote object
export interface QuoteDetails {
  id: number;
  author: string;
  authorSlug: string;
  content: string;
  tags: string[];
  length: number;
  dateAdded: string;
  dateModified: string;
}

// Inner data object
export interface QuoteData {
  page: number;
  limit: number;
  totalPages: number;
  previousPage: boolean;
  nextPage: boolean;
  totalItems: number;
  currentPageItems: number;
  data: QuoteDetails[];
}

// Outer API response
export interface ApiResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: QuoteData;
}
