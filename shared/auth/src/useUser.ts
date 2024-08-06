import { useState } from "react";

export default function useUser() {
  const [user, setUser] = useState({
    id: "",
    name: "",
  });

  const handleLogin = () => {
    setUser({
      id: "1",
      name: "Alice",
    });
  };

  const handleLogout = () => {
    setUser({
      id: "",
      name: "",
    });
  };

  return { user, handleLogin, handleLogout };
}
