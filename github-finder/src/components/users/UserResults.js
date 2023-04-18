import { useEffect, useState } from "react";
import UserItem from "./UserItem";

function UserResults() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    request();
  }, []);

  const request = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users`);

    const data = await response.json();
    setUsers(data);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  if (!isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((items, id) => (
          <UserItem key={id} user={items} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="loader-container">
        <span className="loader"></span>
      </div>
    );
  }
}

export default UserResults;
