import { useState } from "react";

import "./App.css";
import { familyMadrigal, mirabelMadrigal } from "./familyMadrigal.js";

function App() {
  // the value passed into useState is the default value
  /* madrigal = {
      name: "Mirabel",
      description:
        "Hi! I'm Mirabel. Today's a super special day for us - The Family Madrigal. Come learn about my family!",
      image: "https://upload.wikimedia.org/wikipedia/en/e/e7/Mirabel_Madrigal.png",
      alt: "This is me - Mirabel Madrigal"
  } */

  /* on line 33, madrigal.description is "Hi! I'm Mirabel. Today's a super special day for us - The Family Madrigal. Come learn about my family!" */

  const [madrigal, setMadrigal] = useState(mirabelMadrigal);
  const [weDontTalkAboutBruno, setWeDontTalkAboutBruno] = useState(false);

  const handleClick = (familyMember) => {
    // set the state to render the description of the family member who is clicked on
    setMadrigal(familyMember);

    if (familyMember.name === 'Bruno') {
      setWeDontTalkAboutBruno(true);
    }
  } 

  return (
    <>
      <header>
        <img
          src={mirabelMadrigal.image}
          height="300px;"
          alt={mirabelMadrigal.alt}
        />
        <h1>{madrigal.description}</h1>
      </header>
      <main>
        <section>
          {/* familyMadrigal array from familyMadrigal.js */}
          {familyMadrigal.map((member) => {
            return (
              <div key={member.name} onClick={() => handleClick(member)} className={weDontTalkAboutBruno && member.name === 'Bruno' ? 'bruno' : null}>
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
