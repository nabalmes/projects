import { useEffect, useState } from "react";

function UserResults() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    request();
  }, []);

  const request = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();
    setUsers(data);
    setIsLoading(false);
  };

  if (!isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((items, id) => (
          <h3 key={id}>{items.login}</h3>
        ))}
      </div>
    );
  }else {
    return <span className="loader"></span>
  }
}

export default UserResults;
