import "./App.css";
import Header from "./components/Header";
import SkillIntro from "./components/SkillIntro";
import ExampleCodes from "./components/ExampleCodes";
import Hobbies from "./components/Hobbies";
import EducationSection from "./components/EducationSection";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [skillFields, setSkillFields] = useState([]);
  const [schools, setSchools] = useState([]);
  const [codes, setCodes] = useState([]);
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:3001/api/all");
      setCodes(response.data.code);
      setSchools(response.data.schools);
      setSkillFields(response.data.skillField);
      setHobbies(response.data.hobbie);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <h1>Skillek</h1>
      {skillFields.map((skillGroup) => {
        return (
          <SkillIntro
            key={skillGroup.id}
            skillGroup={skillGroup.skillField}
            skills={skillGroup.skill}
          />
        );
      })}
      <EducationSection schools={schools} />
      <h1>Saját munkák</h1>
      <ExampleCodes codes={codes} />
      <h1>Hobbik</h1>
      <Hobbies hobbies={hobbies} />
    </div>
  );
}

export default App;
