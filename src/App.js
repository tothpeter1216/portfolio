import "./App.css";
import Header from "./components/Header";
import SkillIntro from "./components/SkillIntro";
import ExampleCodes from "./components/ExampleCodes";
import Hobbies from "./components/Hobbies";
import { data } from "./data/dataHun";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Skillek</h1>
      {data.skills.map((skillGroup) => {
        return (
          <SkillIntro
            skillGroup={skillGroup.skillField}
            skills={skillGroup.skills}
          />
        );
      })}
      <h1>Saját munkák</h1>
      <ExampleCodes codes={data.codes} />
      <h1>Hobbik</h1>
      <Hobbies hobbies={data.hobbies} />
    </div>
  );
}

export default App;
