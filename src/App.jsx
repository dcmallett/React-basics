import reactImg from './assets/react-core-concepts.png'
//This is to randomly output the text starting point.
//This will help make that bit of text more dynamic
const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

//to produce random number/ index to get access to the reactDescription words
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

function Header() {

  const description = reactDescriptions[genRandomInt(2)]

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )

}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
