import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      const fetchUsersData = async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        setUsers(users);
      };
      fetchUsersData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <h1>UseEffectExample - Fetching Data From API</h1>;
      {users &&
        users.map((user) => (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <h3>{user.username}</h3>
            <h2>{user.email}</h2>
          </div>
        ))}
    </>
  );
};

export default UseEffectExample;
