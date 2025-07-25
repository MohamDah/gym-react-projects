import { Plus, Trash } from "lucide-react";
import { useEffect, useState } from "react";

type TodoItem = {
  id: string,
  content: string,
  checked: boolean;
};

export default function TodoApp() {
  const [todos, setTodos] = useState<TodoItem[]>(() => JSON.parse(localStorage.getItem("todos") || "[]"));
  const [newTodo, setNewTodo] = useState("")
  
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return
    
    const todoItem: TodoItem = {
      id: crypto.randomUUID(),
      content: newTodo,
      checked: false
    }
    setTodos([todoItem ,...todos])
    setNewTodo("")
  };

  const toggleChecked = (todoId: string) => {
    const newTodos = todos.map(i => ({
      ...i,
      checked: i.id === todoId ? !i.checked : i.checked
    }))
    setTodos(newTodos)
  }

  const deleteTodo = (todoId: string) => {
    const newTodos = todos.filter(i => i.id !== todoId)
    setTodos(newTodos)
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <main className="h-screen w-full container max-w-2xl mx-auto flex flex-col items-center">
      <h1 className="text-7xl font-semibold text-[#ebebeb] mt-12 text-center">todos</h1>
      <form onSubmit={handleSubmit} className="w-full mt-12">
        <div className="w-full text-xl shadow-custom rounded-full flex items-center">
          <input className="w-full px-6 py-3 placeholder:text-gray-500  focus:outline-none"
            type="text" placeholder="Add todo..." name="todo" onChange={e => setNewTodo(e.target.value)} value={newTodo} />
          <button className="p-px text-white bg-cyan-600 rounded-full mr-6 cursor-pointer">
            <Plus className="cursor-pointer" />
          </button>
        </div>
      </form>

      <ul className="mt-8 w-full transition-all">
        {
          todos.map(todo => (
            <li key={todo.id} className="flex items-center border-b border-gray-200 gap-4 py-1 transition-all">
              <input id={todo.id.toString()} type="checkbox" checked={todo.checked} onChange={() => toggleChecked(todo.id)} />
              <label htmlFor={todo.id.toString()} className={`text-gray-600 text-xl w-full ${todo.checked ? "line-through" : ""}`}>{todo.content}</label>
              <button className="cursor-pointer p-3 bg-gray-100 ml-auto rounded-full text-red-600"
              onClick={() => deleteTodo(todo.id)}>
                <Trash size={20} fill="currentcolor" />
              </button>
            </li>
          ))
        }
      </ul>
    </main>
  );
}
