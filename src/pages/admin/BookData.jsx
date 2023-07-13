import React, { useState, useEffect } from "react";
import { FormEditBook, HeaderAdmin, Sidebar } from "../../components/index";
import Axios from "axios";

export default function BookData() {
  const [books, setBooks] = useState([]);
  const [image, setImage] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [ISBN, setISBN] = useState("");
  const [description, setDescription] = useState("");
  const [editBook, setEditBook] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3000/api/book")
      .then((result) => {
        console.log("Data Api: ", result.data);
        setBooks(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addBook = () => {
    const data = new FormData();
    data.append("image", image);
    data.append("bookTitle", bookTitle);
    data.append("ISBN", ISBN);
    data.append("description", description);

    Axios.post("http://localhost:3000/api/book", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log("Post success", res);
      })
      .catch((err) => {
        console.log("Post errorr", err);
      });
  };

  const updateBook = async (id, newBook) => {
    const response = await fetch(`http://localhost:3000/v1/book/data/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBook),
    });
    const data = await response.json();
    setBooks(books.map((book) => (book._id === id ? { ...data } : book)));
  };

  const deleteBook = async (id) => {
    await fetch(`http://localhost:3000/api/book/${id}`, {
      method: "DELETE",
    });
    setBooks(books.filter((book) => book._id !== id));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.reload(false);
    addBook();
    setImage("");
    setBookTitle("");
    setISBN("");
    setDescription("");
    setISBN("");
  };

  const handleEditClick = (book) => {
    setEditBook(book);
  };

  const handleCancelEdit = () => {
    setEditBook();
  };

  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900 backdrop-brightness-50">
      <HeaderAdmin />
      <Sidebar />

      <main className="p-4 md:ml-64 h-full pt-20">
        <section className="bg-gray-50 h-screen dark:bg-gray-900 antialiased">
          <div className="mx-auto max-w-screen-xl">
            <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <div className="w-full">
                  <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                    Tambah Data Buku
                  </h2>

                  <div className="gap-3 flex items-center">
                    <div class="w-full">
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Foto mahasiswa
                      </label>
                      <input
                        type="file"
                        // value={image}
                        onChange={(event) => setImage(event.target.files[0])}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required
                      />
                    </div>
                    <div className="w-full">
                      <input
                        type="text"
                        value={bookTitle}
                        onChange={(event) => setBookTitle(event.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Judul Buku"
                      />
                    </div>
                    <div className="w-full">
                      <input
                        type="text"
                        value={ISBN}
                        onChange={(event) => setISBN(event.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="ISBN"
                      />
                    </div>
                    <div className="w-full">
                      <input
                        type="text"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Description"
                      />
                    </div>
                    <button
                      onClick={handleSubmit}
                      className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                    >
                      Tambah
                    </button>
                  </div>
                  <h2 className="mt-8 text-xl font-bold text-gray-900 dark:text-white">
                    Data Buku
                  </h2>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-4 py-4">
                        Foto
                      </th>
                      <th scope="col" className="px-4 py-4">
                        Judul Buku
                      </th>
                      <th scope="col" className="px-4 py-3">
                        ISBN
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Deskripsi
                      </th>
                      <th scope="col" className="px-4 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {books.map((book) => (
                      <tr className="border-b dark:border-gray-700">
                        <td className="px-4 py-3">
                          <img
                            class="w-10 h-10 rounded object-cover"
                            src={`http://localhost:3000/${book.image}`}
                            alt={book.bookTitle}
                          />
                        </td>
                        <th
                          scope="row"
                          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {book.bookTitle}
                        </th>
                        <td className="px-4 py-3">{book.ISBN}</td>
                        <td className="px-4 py-3 max-w-[20rem]">
                          {book.description}
                        </td>
                        <td className="px-4 py-3 flex items-center gap-2 justify-end">
                          <div class="inline-flex rounded-md shadow-sm">
                            <button
                              onClick={() => handleEditClick(book)}
                              class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => deleteBook(book._id)}
                              class="px-4 py-2 text-sm font-medium text-red-600 bg-white border-t border-b border-gray-200 hover:bg-red-100 hover:red-blue-700 focus:z-10 focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                            >
                              Hapus
                            </button>
                            <button
                              onClick={() => handleCancelEdit(books)}
                              class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-2 focus:ring-gray-700 focus:text-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                            >
                              Batal
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {editBook && (
                  <FormEditBook book={editBook} updateBook={updateBook} />
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
