import React, { useState } from "react";

export default function FormEditBook({ book, updateBook }) {
  const [editedBook, setEditedBook] = useState(book);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleUpdateClick = () => {
    updateBook(book._id, editedBook);
  };
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Edit Buku
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="sm:col-span-2">
            <label
              for="bookTitle"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Judul Buku
            </label>
            <input
              type="text"
              name="bookTitle"
              value={editedBook.bookTitle}
              onChange={handleInputChange}
              id="bookTitle"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="ISBN"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              ISBN
            </label>
            <input
              type="text"
              name="ISBN"
              id="ISBN"
              value={editedBook.ISBN}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Deskripsi
            </label>
            <input
              type="text"
              name="description"
              value={editedBook.description}
              onChange={handleInputChange}
              id="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
          </div>
        </div>
        <button
          onClick={handleUpdateClick}
          className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
          Update
        </button>
      </div>
    </section>
  );
}
