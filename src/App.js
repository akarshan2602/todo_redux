import "./css/main.css";
import DisplayTodos from "./actions/DisplayTodos";
import Todos from "./actions/Todos";


function App() {
  return (
    <div className="App">
      
    <h1>TODO App</h1>
     
        <Todos />
        <DisplayTodos />
     
    </div>
  );
}

export default App;