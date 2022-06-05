import React from "react";
import ReactDOM from "react-dom";

// function AppLesson3() {
//   const a = 123
//   const b = 123
//   const c = [1,2,3,4]

//   return (
//       <div className="App">
//         <p>{a}</p>
//         <p>{b}</p>
//         <div>Конкатенация текста {`${a}world`}</div>
//         <div>Сложение {a+b}</div>
//         <p>Сложение {a*9}</p>
//         <div>{c}</div>
//         <p>{c.join(' хрю ')}</p>
//         <div>{c.map((item) => item)}</div>
//         <div>{c.map(item => <strong>{item}</strong>)}</div>
//       </div>
//   )
// }

// tip: чтобы встроить переменную в JSX используйте фигурные скобки {name}
function Book(props) {
  return (
    <div className="Book">
      <h2>{props.name}</h2>
      <p>{props.year}/</p>
      <p>{props.price}</p>
  </div>);
}

function App() {
  return (
    <div>
      <Book name="JS for beginners" year="2018" price="1000" />
      <Book name="React for beginners" year="2019" price="1200" />
      <Book name="Vue for beginners" year="2021" price="1500" />
    </div>
  );

  // React.createElement("div", {}, [
  //   React.createElement(
  //     "h1",
  //     { id: "hello", className: "class1" },
  //     "Hello from React"
  //   ),
  //   React.createElement(Book, {
  //     name: "JS for beginners",
  //     year: 2018,
  //     price: 1000
  //   }),
  //   React.createElement(Book, { name: "React", year: 2020, price: 1200 }),
  //   React.createElement(Book, { name: "Vue JS", year: 2019, price: 1100 })
  // ]);
}


const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  rootElement
);

export default App