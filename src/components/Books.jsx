import React from "react";
import { useEffect, useState } from "react";
import { fetchBooks } from "../api/ajaxHelper";

export default function Books() {
  const [books, setBooks] = useState([]);
  console.log(books);

  async function getBooks() {
    try {
      const allBooks = await fetchBooks();
      setBooks(allBooks);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <div className="books-title">
        <h2>Book List</h2>
      </div>
      <div className="books-container">
        {books.map((book) => (
          <div className="book-card">
            <li key={book.id}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p>{book.description}</p>
              <img src={book.coverimage} alt={book.title} />
              <p>
                {book.available ? <strong>"Available"</strong> : "Checked Out"}
              </p>
            </li>
          </div>
        ))}
      </div>
    </>
  );
}
