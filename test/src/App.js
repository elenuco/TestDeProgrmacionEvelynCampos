import "./App.css";

import { useEffect, useState } from "react";

export default function App() {
  const [user, setUser] = useState();
  const url = "https://0q27loouph.execute-api.us-east-1.amazonaws.com/";

  async function fetchUser() {
    const response = await fetch(url);
    const json = await response.json();

    setUser(json);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="App">{user ? JSON.stringify(user) : "Fetching user"}</div>
  );
}