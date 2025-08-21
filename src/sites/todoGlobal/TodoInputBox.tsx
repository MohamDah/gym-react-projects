import { PlusIcon } from 'lucide-react';
import React, { useState } from 'react';
import { addTodo } from './todo';
import { useTodoDispatch } from './todoStore';

export default function TodoInputBox() {
  const [newTodo, setNewTodo] = useState("");

  const dispatch = useTodoDispatch();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    dispatch(addTodo(newTodo));
    setNewTodo("")
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mt-12">
      <div className="w-full text-xl shadow-custom rounded-full flex items-center">
        <input className="w-full px-6 py-3 placeholder:text-gray-500  focus:outline-none"
          type="text" placeholder="Add todo..." name="todo" onChange={e => setNewTodo(e.target.value)} value={newTodo} />
        <button className="p-px text-white bg-cyan-600 rounded-full mr-6 cursor-pointer">
          <PlusIcon className="cursor-pointer" />
        </button>
      </div>
    </form>
  );
}
