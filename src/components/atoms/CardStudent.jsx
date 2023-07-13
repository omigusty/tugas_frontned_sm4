import React from "react";

export default function CardStudent({ picture, nama, NIM, kelas, jurusan }) {
  return (
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="flex flex-col items-center px-4 py-4">
        <img
          class="w-24 h-24 mb-3 rounded-full shadow-lg object-cover"
          src={`http://localhost:3000/${picture}`}
          alt="Bonnie image"
        />
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">
          {nama}
        </h5>
        <p class="text-md mb-2 text-gray-500 dark:text-gray-400">{NIM}</p>
        <span class="text-md text-gray-500 dark:text-gray-400">
          {kelas} • {jurusan}
        </span>
      </div>
    </div>
  );
}
