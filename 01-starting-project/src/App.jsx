import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import { CoreConcepts, CoreConceptUsingObject, CoreConceptUsingRestProperty } from "./Components/Concepts.jsx";
import Header from './Components/Header.jsx'
import TabButton from './Components/TabButton.jsx'
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic); will print the old state, because here it is only scheduling the state changes only after the componet gets rerendered
  }

  let tabContent = <p>Please select a topic</p>;

  if(selectedTopic){
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div> );
  }

  return (
    <div>
      <Header /> 
      <main>
        <section id="core-concepts">
          <h2>Core Concepts!</h2>
          <ul>

            {/* Here we create a new array by mapping the coreconcpets into <CoreConcepts /> components */}
            {/* Here we also add key prop to help react identify elements uniquely */}
            {CORE_CONCEPTS.map( (item)=> (<CoreConcepts key={item.title} {...item}/>) )}  

            {/* {[<p>jsdjc</p>, <p>jshcvdhvj</p>]}  rendering an array will display the elements 1 below th other. */}

            {/* <CoreConcepts  
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}  
              image={CORE_CONCEPTS[0].image}
              />
            <CoreConcepts {...CORE_CONCEPTS[1]} />  
            <CoreConceptUsingObject concept = {CORE_CONCEPTS[2]} />  
            <CoreConceptUsingRestProperty
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}  
              image={CORE_CONCEPTS[3].image} /> */}

          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
            isSelected={selectedTopic === "components"} 
            onSelect={ () => {handleSelect("components")} }>
              Component</TabButton>

            <TabButton 
            isSelected={selectedTopic === "jsx"} 
            onSelect={ () => {handleSelect("jsx")} }>
              JSX</TabButton>

              <TabButton 
            isSelected={selectedTopic === "props"} 
            onSelect={ () => {handleSelect("props")} }>
              Props</TabButton>

              <TabButton 
            isSelected={selectedTopic === "state"} 
            onSelect={ () => {handleSelect("state")} }>
              State</TabButton>
          </menu>
          {/* {!selectedTopic ? <p>Please select a topic</p> : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div> )}       OR can use variable*/}
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
