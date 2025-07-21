import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TodoApp from "./sites/TodoApp";
import CalcApp from "./sites/CalcApp";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo-app" element={<TodoApp />} />
        <Route path="/calc-app" element={<CalcApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


function Home() {
  return <ul className="list-disc">
    <li className="p-5 text-2xl font-medium text-blue-600 underline">
      -
      {" "}
      <Link className="" to="/todo-app">Todo App</Link>
    </li>
    <li className="p-5 text-2xl font-medium text-blue-600 underline">
      -
      {" "}
      <Link className="" to="/calc-app">Calculator App</Link>
    </li>
  </ul>;
}