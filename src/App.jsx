import { useState } from "react";
import bookLogo from "./assets/books.png";
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
      <h1>Book Buddy</h1>
      <Navigation />
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
      </Routes>
    </>
  );
}

export default App;
