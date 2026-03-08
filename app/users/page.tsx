import React from "react";

interface User {
  id: number;
  username: String;
  email: String;
}

const UsersPage = async () => {
  var result = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await result.json();

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
