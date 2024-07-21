import { useState } from 'react';

//named exports you import with {} 
import { CORE_CONCEPTS, EXAMPLES } from "./data"
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";

{/*by default react will only execute a component function once when its first encounted somewhere in the code */}
function App() {

{
    /* this is why we use const becuase it will be recreated everytime this function executes
    react will store and update the value each time
  */}
  const [ selectedTopic, setSelectedTopic] = useState();

  const handleSelect = (selectedButton) => {
    //selectedButton => 'components' 'jsx', 'props', 'state'

    setSelectedTopic(selectedButton)
  }


  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {/* using the map method to out put lists of data (conceptItem can be anything) */}
            {CORE_CONCEPTS.map((conceptItem) =>  <CoreConcepts key={conceptItem.title} {...conceptItem} />)}
          </ul>
        </section>
        <section id="examples">
            <h2>Examples</h2>
            <menu>
              {
                /*The onSelect is  the prop we forward to our onClick prop in our TabButton Component 
                  we can pass annonymous arrow functions to pass to execute the handleSelect
                  it will make the the arrow funciton is the value thats passed to handleSelect and also our 
                  onSelect in the tab component
              */}
              <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
              <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
              <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
              <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
            </menu>
            {!selectedTopic && <p>Please select a topic.</p>}
            {selectedTopic && (
              <div id="tab-content">

              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
              </div>

            )}
        </section>
      </main>
    </div>
  );
}

export default App;
