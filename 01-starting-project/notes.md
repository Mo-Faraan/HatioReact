- React components are basically functions.
- It should have 1. Follow PascalCasing 2. Return a renderable value
- jsx - javascript syntax extension. Allows code structuring, usability etc.
- Built in components - only valid html components. Recat traverses the component tree until it has only built in components and renders them.

- {} use this to render dynamic content. should contain expressions which provide a value.
Yes, in React, when passing props that are not strings (such as numbers, objects, arrays, or variables), you should use curly braces `{}`. For string values, you can use quotes, but for any JavaScript expression or non-string value, use `{}`. For example:

<userInfo 
  name="max"                // string, can use quotes or {}
  age={34}                  // number, use {}
  details={{ username: "max" }} // object, use {}
  hobbies={["cooking", "reading"]} // array, use {}
/>
- since we are creating custom components, the name of props is entirely UP TO US.
- These props get converted to an object and is passed to the component as a single parameter.

function CoreConcepts(props){
  return(
    <li>
      <img src={props.image} alt={props.description} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

- props.children = whatevers in the component <Card> .... </Card>

<Card title="Hello" color="blue">
  <p>Some content</p>
</Card>

props = {
  title: "Hello",
  color: "blue",
  children: <p>Some content</p>
}

<Card title="Hello">
  <p>One</p>
  <p>Two</p>
</Card>

props = {
  title: "Hello",
  children: [
    <p>One</p>,
    <p>Two</p>
  ]
}

---------------------------------------------
children prop vs attribute prop :

Used when we have to pass jsx as value to another component
function TabButton({children}){
  return <li><button>{children}</button></li>;
}

<TabButton>Components></TabButton>

Used when multiple small pieces of info needs to be passed
function TabButton({label}){
  return <li><button>{label}</button></li>;
}

<TabButton label="Component"> />

---------------------------------------------------

event listeners =

document.querySelector('button').addEventListener('click',() => {
      // vanilla javascript code for adding event listener
})

//onClick is a built in prop of all built in componets and is used as event listeners. 
here also we do onClick={handleClick} and not handleClick() because the finction needs to be 
executed by react when the button is clicked (so we pass the function name, or a pointer to the function through props which we actually use in app.jsx using onSelect and all) not when that line of code is executed (when we use handleClick())

export default function TabButton(props) {
    function handleClick(){
        console.log("kjsbhd");
    }
    return (
        <li><button onClick={handleClick}>{props.children}</button></li> 
    );
}

//in order to make the handleClick function customisable, we can pass an arrow function which gets executed when the button is clicked and which calls the actual handleClick function, allowing us to pass arguments.
<li><button onClick={ ()=> {handleClick("argument1") } >{props.children}</button></li>


--------------------------------
- A react component only executes once. It compares the components and if theres any difference, renders it again (when using states). Other wise it wont execute the component just because some variable in the component changes.
- Hence to update the component based on something, we use states.

- useState = React Hooks = regular functions that can only be used in react components.

- Hooks :
  1. Only call hooks inside component functions
  2. only call hooks at the top level of componets not in nested code statements (like if blocks)

- useState() returns an array with exactly 2 elements

- Manage state = manage data and tell react to re execute a component function via useState() hook
- useState("default value react stores when the component is rendered")
- const [counter, setCounter] = useState(0);
          ||          ||                 ||
current state    state updating function.                  initial state value stored by react
value provided     updates the stored value and tells  
by react           react to reexecute the and tells react to reexecute the             
                  component function in which useState() was called.  


