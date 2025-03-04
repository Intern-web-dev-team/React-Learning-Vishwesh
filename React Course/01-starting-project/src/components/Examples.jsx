import React from "react";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";
import { useState } from "react";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

function Examples() {
  const [selectedButton, setSelectedButton] = useState();
  function handleSelect(selectedButton) {
    // console.log(selectedButton);
    setSelectedButton(selectedButton);
  }

  return (
    <>
      <Section title="Examples" id="examples">
        <Tabs
          buttonsContainer="menu"
          buttons={
            <>
              <TabButton
                isSelected={selectedButton === "components"}
                onSelect={() => handleSelect("components")}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={selectedButton === "jsx"}
                onSelect={() => handleSelect("jsx")}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={selectedButton === "props"}
                onSelect={() => handleSelect("props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={selectedButton === "state"}
                onSelect={() => handleSelect("state")}
              >
                State
              </TabButton>
            </>
          }
        >
          {!selectedButton ? (
            <p>Please select a topic!!</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedButton].title}</h3>
              <p>{EXAMPLES[selectedButton].description}</p>
              <pre>
                <code>{EXAMPLES[selectedButton].code}</code>
              </pre>
            </div>
          )}
        </Tabs>
      </Section>
    </>
  );
}

export default Examples;
