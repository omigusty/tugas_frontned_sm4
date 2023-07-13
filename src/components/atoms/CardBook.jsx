import React from "react";

export default function CardBook({ image, ISBN, bookTitle, description }) {
  return (
    <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img
        src={`http://localhost:3000/${image}`}
        className="rounded-t-lg h-36 w-full object-cover"
        alt=""
      />
      <div class="flex justify-start items-center mt-3 text-gray-500">
        <p class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 mb-1">
          {ISBN}
        </p>
      </div>
      <h5 class=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-1">
        {bookTitle}
      </h5>
      <p class="font-light text-gray-500 dark:text-gray-400">{description}</p>
    </article>
  );
}
