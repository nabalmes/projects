import { useEffect, useState } from "react";

function UserResults() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    request();
  }, []);

  const request = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users`);

    const data = await response.json();
    console.log(data);
    setUsers(data);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };

  if (!isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((items, id) => (
          <h3 key={id}>{items.login}</h3>
        ))}
      </div>
    );
  } else {
    return <div className="loader-container">  <span className="loader"></span> </div>;
  }
}

export default UserResults;
