import React from 'react';
import { CORE_CONCEPTS } from "../data.js";
import CoreConcepts from "./CoreConcepts.jsx";
import Section from "./Section.jsx"


function CoreConcept() {
    return (
        <>
        <Section title = "Core Concepts" id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((concept)=>(
              <CoreConcepts key={concept.title} {...concept} />
            ))}
            {/* <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </Section>
        <h2>Time to get started!</h2>
        </>

    );
}

export default CoreConcept;