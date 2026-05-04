import type { UsersData } from "./UserData";
export interface UsersApiResponse {
  statusCode: number;
  data: {
    data: Array<UsersData>;
  };
  message: string;
  success: boolean;
}
