import { useState } from "react";
import { useAppDispatch } from "./hooks";
import { changeColor } from "./features/theme";

export default function ChangeColor() {
  const [newColor, setNewColor] = useState("")
  const dispatch = useAppDispatch()
  
  return (
    <div>
      <input type="text" value={newColor} onChange={e => setNewColor(e.target.value)} />
      <button onClick={() => dispatch(changeColor(newColor))} className="p-2 m-2 border">
        Change Color
      </button>
    </div>
  );
}
