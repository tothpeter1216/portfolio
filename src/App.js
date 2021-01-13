import Hobbies from "./components/Hobbies";
import EducationSection from "./components/EducationSection";
import React, { useState, useEffect } from "react";
import { getAllData } from "./services/allData";
import HeaderAnimation from "./components/HeaderAnimation";
import Sentence from "./components/Sentence";
import Infos from "./components/Infos";
import SkillSection from "./components/SkillSection";
import CodeSection from "./components/CodeSection";

function App() {
  const [skillFields, setSkillFields] = useState([]);
  const [schools, setSchools] = useState([]);
  const [codes, setCodes] = useState([]);
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getAllData();
      setCodes(response.data.code);
      setSchools(response.data.schools);
      setSkillFields(response.data.skillField);
      setHobbies(response.data.hobbie);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <HeaderAnimation />
      <Sentence />
      <Infos />
      <SkillSection skillFields={skillFields} />
      <EducationSection schools={schools} />
      <CodeSection codes={codes} />

      <h1>Hobbik</h1>
      <Hobbies hobbies={hobbies} />
    </div>
  );
}

export default App;
