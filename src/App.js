import logo from "./logo.svg";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodosList from "./components/TodosList/TodosList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodo />
        <TodosList />
      </header>
    </div>
  );
}

export default App;
