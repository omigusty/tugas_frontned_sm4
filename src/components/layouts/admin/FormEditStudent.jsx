import React from "react";
import { useState } from "react";

export default function FormEditStudent({ student, updateStudent }) {
  const [editedStudent, setEditedStudent] = useState(student);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedStudent((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleUpdateClick = () => {
    updateStudent(student._id, editedStudent);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Edit Mahasiswa
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="sm:col-span-2">
            <label
              for="NIM"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              NIM
            </label>
            <input
              type="text"
              name="NIM"
              value={editedStudent.NIM}
              onChange={handleInputChange}
              id="NIM"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="nama"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nama
            </label>
            <input
              type="text"
              name="nama"
              value={editedStudent.nama}
              onChange={handleInputChange}
              id="nama"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="kelas"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Kelas
            </label>
            <input
              type="text"
              name="kelas"
              value={editedStudent.kelas}
              onChange={handleInputChange}
              id="kelas"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="jurusan"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Jurusan
            </label>
            <input
              type="text"
              name="jurusan"
              value={editedStudent.jurusan}
              onChange={handleInputChange}
              id="jurusan"
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
