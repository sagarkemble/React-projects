import { useEffect, useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import type { UsersApiResponse } from "./types/ApiResponse";

function App() {
  const [pageNo, setPageNo] = useState(1);
  const limit = 10;
  const [apiResponse, setApiResponse] = useState<UsersApiResponse | null>(null);

  useEffect(() => {
    async function apiCall() {
      const response = await fetch(
        `https://api.freeapi.app/api/v1/public/randomusers/?page=${pageNo}&limit=${limit}`,
      );
      const data = await response.json()!;

      setApiResponse(data);
    }
    apiCall();
  }, [pageNo]);

  return (
    <>
      <header className="app-header">
        <h1 className="header-title">Random Users</h1>
        <p className="header-description">
          A curated directory of randomly generated user profiles from around
          the world
        </p>
      </header>
      <div className="user-container">
        {apiResponse?.data.data.map((userData) => (
          <UserCard key={userData.login.uuid} userData={userData} />
        ))}
      </div>
      <footer>
        <button
          className="previous"
          onClick={() => setPageNo((prev) => Math.max(prev - 1, 1))}
        >
          Previous
        </button>
        <button className="next" onClick={() => setPageNo((prev) => prev + 1)}>
          Next
        </button>
      </footer>
    </>
  );
}

export default App;
