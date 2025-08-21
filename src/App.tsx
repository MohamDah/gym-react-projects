import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TodoApp from "./sites/TodoApp";
import CalcApp from "./sites/CalcApp";
import ClassComp from "./sites/ClassComp";
import Portals from "./sites/Portals";
import Redux from "./sites/redux/Redux";
import ContextAPI from "./sites/ContextAPI";
import TodoAppGlobal from "./sites/todoGlobal/TodoAppGlobal";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>Catch All Route</h1>} />
        <Route path=":id" element={<h1>Dynamic Route</h1>} />
        <Route path="/todo-app" element={<TodoApp />} />
        <Route path="/todo-app-global" element={<TodoAppGlobal />} />
        <Route path="/calc-app" element={<CalcApp />} />
        <Route path="/portals" element={<Portals />} />
        <Route path="/redux" element={<Redux />} />
        <Route path="/context" element={<ContextAPI />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;


function Home() {
  return <>
    <ul className="list-disc">
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
      <li className="p-5 text-2xl font-medium text-blue-600 underline">
        -
        {" "}
        <Link className="" to="/todo-app-global">Todo App Global State</Link>
      </li>
    </ul>

    <ClassComp type="fasdfds" />
  </>;
}