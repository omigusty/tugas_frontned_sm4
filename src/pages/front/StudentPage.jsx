import React, { useEffect, useState } from "react";
import { Navbar, TextHeader, Footer, CardStudent } from "../../components";
import Axios from "axios";

export default function StudentPage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/api/student")
      .then((result) => {
        console.log("Data Api: ", result.data);
        setStudents(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <TextHeader
            title="Data Mahasiswa"
            desc="We use an agile approach to test assumptions and connect with the
                  needs of your audience early and often."
          />
          <div class="grid gap-8 lg:grid-cols-3">
            {students.map((student) => (
              <CardStudent
                picture={student.image}
                nama={student.nama}
                NIM={student.NIM}
                kelas={student.kelas}
                jurusan={student.jurusan}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
