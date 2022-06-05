import './App.css'
// import StudCard from './StudCard'
// import ValueInput from './ValueInput'
// import MaxValueInput from './MaxValueInput'
// import StudCardClass from './StudCardClass'
import Order from './components/Order'

function App() {
  return (
    <Order />
    // <div className="App">
    //   <StudCard text="Студент" name="Батон" surname="Хлебников"/>
    //   <StudCard text="Студент" name="Арина" surname="Ливаненкова" />
    //   <StudCardClass minValue="2" maxValue="9" />
    // </div>
  )
}

// <StudCard name={}/> --> React.createElement(StudCard, {})

// function StudCard({ text }) {
//   return (
//     <>
//       <hr />
//       <div className="card">{text}</div>
//       <hr />
//     </>
//   )
// }

export default App
