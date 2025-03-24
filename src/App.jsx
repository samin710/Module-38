import "./App.css";
import ToDo from "./ToDo";
import Actor from "./Actor";
import Singer from "./Singer";
import Books from "./Books";

function App() {
  // const time = 50;

  // const actors = ["Bappa Raj", "Omar Sunny", "Salman Shah"];
  // const singers = [
  //   { id: 1, name: "Dr. Mahfuz", age: 68 },
  //   { id: 2, name: "Tahsan", age: 45 },
  //   { id: 3, name: "Shuvro Dev", age: 65 },
  // ];

  const books = [
    { id: 1, sub: "Physics", price: 400 },
    { id: 2, sub: "Chemistry", price: 500 },
    { id: 3, sub: "Mathematics", price: 450 },
    { id: 4, sub: "Biology", price: 480 },
  ];

  return (
    <>
      <h1>React Core Concepts</h1>

      {
        books.map(book=><Books key={book.id} book={book}></Books>)
      }

      {/* {actors.map((actor) => (
        <Actor actor={actor}></Actor>
      ))} */}
      {/* 
      {singers.map((singer) => (
        <Singer key={singer.id} singer={singer}></Singer>
      ))} */}

      {/* <ToDo task="Learn React" isDone={true} time={time}></ToDo>
      <ToDo task="Revised JavaScript" isDone={false} ></ToDo>
      <ToDo task="Take a shower" isDone={true} time={time}></ToDo> */}

      {/* <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="Samin" tech="Python"></Developer>
      <Developer name="Masud" tech="JavaScript"></Developer>
      <Player name = "Tamim" run = "5000"></Player>
      <Player name = "Mushi" run = "5000"></Player> */}
    </>
  );
}
function Player({ name, run }) {
  return (
    <div class="student">
      <h3>Name: {name}</h3>
      <p>Runs: {run}</p>
    </div>
  );
}
function Developer(props) {
  return (
    <div
      style={{
        border: "2px solid green",
        borderRadius: "20px",
        margin: "10px",
      }}
    >
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech} </p>
    </div>
  );
}
function Student() {
  return (
    <div className="student">
      <p>Name:</p>
      <p>Department:</p>
    </div>
  );
}

function Person() {
  const name = "Samin";
  const age = 16;
  const personStyle = {
    color: "red",
    fontSize: "20px",
  };
  return (
    <p style={personStyle}>
      I am a {name} age {age}
    </p>
  );
}
function Sports() {
  return (
    <>
      <h3>Cricket</h3>
      <ul>
        <li>Kola</li>
        <li>Komola</li>
        <li>Angur</li>
      </ul>
      <p>I love to play Cricket</p>
    </>
  );
}
function Pet() {
  return (
    <>
      <h4>Cat</h4>
    </>
  );
}

export default App;
