import { useState } from "react";

import {
  Account,
  Books,
  Login,
  Navigation,
  Register,
  SingleBook,
} from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/account" element={<Account token={token} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
      </Routes>
    </>
  );
}

export default App;
