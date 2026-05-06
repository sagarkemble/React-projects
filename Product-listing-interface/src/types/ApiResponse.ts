// Individual product
export interface ProductDetails {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
  images: string[];
}

// Inner data object
export interface ProductData {
  data: ProductDetails[];
  totalItems: number;
  totalPages: number;
  currentPageItems: number;
  limit: number;
  page: number;
  nextPage: boolean;
  previousPage: boolean;
}

// Outer API response
export interface ApiResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: ProductData;
}
