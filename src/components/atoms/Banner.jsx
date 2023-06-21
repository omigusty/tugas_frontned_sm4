import React from "react";

export default function Banner({ message }) {
  return (
    <div
      id="sticky-banner"
      tabindex="-1"
      className="fixed top-0 left-0 z-50 flex justify-between w-full p-4 border-b border-blue-200 bg-blue-50 dark:bg-blue-700 dark:border-blue-600"
    >
      <div className="flex items-center mx-auto">
        <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
          <span className="inline-flex p-1 mr-3 bg-blue-200 rounded-full dark:bg-blue-600">
            <svg
              className="w-4 h-4 text-blue-500 dark:text-blue-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="sr-only">info</span>
          </span>
          <span className="text-md font-medium text-blue-500">{message}</span>
        </p>
      </div>
      <div className="flex items-center">
        <button
          data-dismiss-target="#sticky-banner"
          type="button"
          className="flex-shrink-0 inline-flex justify-center items-center text-blue-400 hover:bg-blue-200 hover:text-blue-900 rounded-lg text-sm p-1.5 dark:hover:bg-blue-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close banner</span>
        </button>
      </div>
    </div>
  );
}
