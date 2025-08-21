import { login, logout } from "./features/user";
import { useAppDispatch } from "./hooks";

export default function Login() {
  const dispatch = useAppDispatch();


  return (
    <div>
      <button onClick={() => {
        dispatch(login({ name: "pedro", age: 20, email: "amogus@gmail.com" }));
      }
      } className="border p-2">Login</button>
      <button onClick={() => {
        dispatch(logout());
      }
      } className="border p-2">Logout</button>
    </div>
  );
}
