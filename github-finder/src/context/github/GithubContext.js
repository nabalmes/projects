import { createContext, useState } from "react";

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const request = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/users`);
    
        const data = await response.json();
        setUsers(data);
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      };
}