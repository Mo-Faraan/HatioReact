import reactImage from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";

const reactDescriptions = ["Core","Fundamental","Adipoli"];
function getRandomIndex(max){
  return Math.floor(Math.random()*(max+1));
}

function Header() {
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

// props get passed to the components as an object

// function CoreConcepts(props){
//   return(
//     <li>
//       <img src={props.image} alt={props.description} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

//Object destructuring in the component. passing the props to its associated names so that we dont need to do props.title etc
function CoreConcepts({image, title, description}){
  return(
    <li>
      <img src={image} alt={description} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function CoreConceptUsingObject({concept}){
  const {image,title,description} = concept;
  return(
    <li>
      <img src={image} alt={description} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function CoreConceptUsingRestProperty({image = "jhdbc", ...concept}){   //passing default value for image prop, incase not supplied
  const {title, description} = concept;
  return(
    <li>
      <img src={image} alt={description} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header /> 
      <main>
        <section id="core-concepts">
          <h2>Core Concepts!</h2>
          <ul>
            <CoreConcepts  
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}  
              image={CORE_CONCEPTS[0].image}
              />
              
            <CoreConcepts {...CORE_CONCEPTS[1]} />     {/*Pulling out the objects from the array and adding them as props */}

            {/* here {} tells jsx to evaluate the js expression and return the value. An object is returned here and we need to set up a prop. 
            so the prop here is concept and the object is stored inside the concept prop. concept = { title : "jsd", desc: "cd", image:"jdf"}
            Now this prop is actually passed into the component. But the components parameter is props, an object, with individual props right. so it will be props = { concept : { title : "jsd", desc: "cd", image:"jdf"} }
            so we use obj destructuring {concept} in the component so that the key concept from object props is extracted and passed to variable concept. 
            other wise we will pass CorecOnceptUsingObject(props) and then use props.concept.title, props.concept.descriptiuon etc */}
            <CoreConceptUsingObject concept = {CORE_CONCEPTS[2]} />  

            {/* Here we use Rest property of js for passing props. the props are passed as an object, and by using rest object desctructuring, 
            certain props can  be recieved into an object and used. 
            const {a, ...rest} = {a:1, b:2, c:3}
            // rest = {b:2, c:3}  */}
            <CoreConceptUsingRestProperty
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}  
              image={CORE_CONCEPTS[3].image} />

          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
