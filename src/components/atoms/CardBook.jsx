import React from "react";

export default function CardBook({ ISBN, bookTitle, description }) {
  return (
    <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div class="flex justify-start items-center mb-2 text-gray-500">
        <p class="text-sm">{ISBN}</p>
      </div>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {bookTitle}
      </h5>
      <p class="font-light text-gray-500 dark:text-gray-400">{description}</p>
    </article>
  );
}
