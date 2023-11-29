import React from "react";
import { getUser } from "../api/ajaxHelper";
import { useState, useEffect } from "react";

export default function Account({ token }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const nextUser = await getUser(token);
      setUser(nextUser);
    }
    if (!token) return;
    fetchUser();
  }, []);

  return;
  user ? (
    <>
      <div>
        <h3>{user.name}</h3>
      </div>
    </>
  ) : null;
}
