import { Provider } from "react-redux";
import TodoInputBox from "./TodoInputBox";
import TodoList from "./TodoList";
import { todoStore } from "./todoStore";



export default function TodoAppGlobal() {

  return (
    <Provider store={todoStore}>
      <main className="h-screen w-full container max-w-2xl mx-auto flex flex-col items-center">
        <h1 className="text-7xl font-semibold text-[#ebebeb] mt-12 text-center">todos</h1>
        <TodoInputBox />
        <TodoList />
      </main>
    </Provider>
  );
}
