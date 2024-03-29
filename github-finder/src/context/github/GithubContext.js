import { createContext, useState } from "react";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_API_URL;

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const request = async () => {
    console.log(GITHUB_URL);
    const response = await fetch(`${GITHUB_URL}/users`);

    const data = await response.json();
    setUsers(data);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <GithubContext.Provider
      value={{
        users,
        isLoading,
        request,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
