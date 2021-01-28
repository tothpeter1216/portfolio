import EducationSection from "./components/schoolSection/EducationSection";
import React, { useState, useEffect } from "react";
import { getAllData } from "./services/allData";
import HeaderAnimation from "./components/pageTop/HeaderAnimation";
import Sentence from "./components/pageTop/Sentence";
import Infos from "./components/pageTop/Infos";
import SkillSection from "./components/skillSection/SkillSection";
import CodeSection from "./components/codeSection/CodeSection";
import HobbySection from "./components/hobbySection/HobbySection";
import Footer from "./components/footer/Footer";
import Navbar from "./components/pageTop/Navbar";

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
      <Navbar />
      <SkillSection skillFields={skillFields} />
      <EducationSection schools={schools} />
      <CodeSection codes={codes} />
      <HobbySection hobbies={hobbies} />
      <Footer />
    </div>
  );
}

export default App;
