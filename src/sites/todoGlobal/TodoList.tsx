import { useTodoDispatch, useTodoSelector } from "./todoStore";
import { TrashIcon } from "lucide-react";
import { deleteTodo, toggleCheckTodo } from "./todo";



export default function TodoList() {
  const todos = useTodoSelector(i => i.todos.value)
  const dispatch = useTodoDispatch();


  const toggleChecked = (todoId: string) => {
    dispatch(toggleCheckTodo(todoId));
  };
  return (
    <ul className="mt-8 w-full transition-all">
      {
        todos.map(todo => (
          <li key={todo.id} className="flex items-center border-b border-gray-200 gap-4 py-1 transition-all">
            <input id={todo.id.toString()} type="checkbox" checked={todo.checked} onChange={() => toggleChecked(todo.id)} />
            <label htmlFor={todo.id.toString()} className={`text-gray-600 text-xl w-full ${todo.checked ? "line-through" : ""}`}>{todo.content}</label>
            <button className="cursor-pointer p-3 bg-gray-100 ml-auto rounded-full text-red-600"
              onClick={() => dispatch(deleteTodo(todo.id))}>
              <TrashIcon size={20} fill="currentcolor" />
            </button>
          </li>
        ))
      }
    </ul>
  );
}
