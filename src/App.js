import "./App.css";
import Header from "./components/Header";
import SkillIntro from "./components/SkillIntro";
import ExampleCodes from "./components/ExampleCodes";

function App() {
  const reactSkills = [
    {
      skillName: "skill",
      level: 3,
    },
    {
      skillName: "other",
      level: 2,
    },
    {
      skillName: "another",
      level: 3,
    },
  ];
  const cppSkills = [
    {
      skillName: "cpp",
      level: 3,
    },
    {
      skillName: "other",
      level: 2,
    },
    {
      skillName: "another",
      level: 3,
    },
  ];
  const backendSkills = [
    {
      skillName: "cpp",
      level: 3,
    },
    {
      skillName: "other",
      level: 2,
    },
    {
      skillName: "another",
      level: 3,
    },
  ];

  return (
    <div className="App">
      <Header />
      <SkillIntro skillGroup={"React Developer Skills"} skills={reactSkills} />
      <SkillIntro skillGroup={"C++ Developer Skills"} skills={cppSkills} />
      <SkillIntro
        skillGroup={"Backend Developer Skills"}
        skills={backendSkills}
      />
      <ExampleCodes />
    </div>
  );
}

export default App;
