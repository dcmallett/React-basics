import reactImg from '../../assets/react-core-concepts.png'
import './Header.css'

export default function Header() {

//This is to randomly output the text starting point.
//This will help make that bit of text more dynamic
const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

//to produce random number/ index to get access to the reactDescription words
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

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