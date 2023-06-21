import React from "react";
import {
  BookData,
  LandingPage,
  Login,
  Register,
  StudentData,
  BookPage,
  StudentPage,
} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/books" element={<BookPage />} />
        <Route path="/students" element={<StudentPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/book" element={<BookData />} />
        <Route path="/admin/student" element={<StudentData />} />
      </Routes>
    </BrowserRouter>
  );
}
