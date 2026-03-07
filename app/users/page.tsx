import React from "react";

interface User {
  id: number;
  username: String;
  email: String;
}

const UsersPage = async () => {
  var result = await fetch("https://jsonplaceholder.typicode.com/users", {
    // This will make it so data is not cached and fetched on every load.
    cache: "no-store",

    next: {
      // Adding this makes it so data is refreshed from the backend every 10 seconds
      revalidate: 10
    },

    // NOTE: This caching behaviour only works in the fetch function. It wont work in 3rd-party libs.
  });
  const users: User[] = await result.json();

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
