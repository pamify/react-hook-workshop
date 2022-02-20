import "./App.css";
import { familyMadrigal, mirabelMadrigal } from "./familyMadrigal.js";

function App() {
  return (
    <>
      <header>
        <img
          src={mirabelMadrigal.image}
          height="300px;"
          alt={mirabelMadrigal.alt}
        />
        <h1>{mirabelMadrigal.description}</h1>
      </header>
      <main>
        <section>
          {familyMadrigal.map((member) => {
            return (
              <div key={member.name}>
                <img
                  src={member.image}
                  alt={member.alt}
                  width="200px"
                  height="200px"
                />
                <br />
                <h2>{member.name}</h2>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default App;
