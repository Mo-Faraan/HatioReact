import reactImage from "../assets/react-core-concepts.png";
import './Header.css'

const reactDescriptions = ["Core","Fundamental","Adipoli"];

function getRandomIndex(max){
  return Math.floor(Math.random()*(max+1));
}

export default function Header() {
    const reactDescription = reactDescriptions[getRandomIndex(2)];
    return (
      <header>
        {/* <img src="src/assets/react-core-concepts.png" alt="Stylized atom" /> */}
        <img src={reactImage} alt="Stylized atom" />
  
        <h1>React Essentials</h1>
        <p>
          {reactDescription} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }