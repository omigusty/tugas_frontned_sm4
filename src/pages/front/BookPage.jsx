import React, { useState, useEffect } from "react";
import { Navbar, Footer, TextHeader, CardBook } from "../../components";

export default function BookPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await fetch("http://localhost:3000/api/book");
    setBooks(await response.json());
  };

  return (
    <>
      <Navbar />
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <TextHeader
            title="Data Buku"
            desc="We use an agile approach to test assumptions and connect with the
                  needs of your audience early and often."
          />
          <div class="grid gap-8 lg:grid-cols-3">
            {books.map((book) => (
              <CardBook
                ISBN={book.ISBN}
                bookTitle={book.bookTitle}
                description={book.description}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
