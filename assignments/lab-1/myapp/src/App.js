import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [students, setstudents] = useState([]);
  useEffect(() => {
    async function fetchStudents() {
      const studentsFromLambda = (
          await axios.get(
              "https://wcsr6fokvd4chvglnle2eyucu40muabh.lambda-url.us-east-1.on.aws/"
          )
      ).data;
      setstudents(studentsFromLambda);
      console.log(studentsFromLambda);
    }
    fetchStudents();
  }, []);
  return (
      <div>
        Cloud Computing course
        <ol>
          {students.map((student) => (
              <li>{student}</li>
          ))}
        </ol>
      </div>
  );
}

export default App;
