import { UserContextProvider, useUserContext } from "./context/UserContext";


export default function ContextAPI() {
  return (
    <UserContextProvider>
      <div className="p-4">
        <p>Root component</p>
        <Child1 />
      </div>
    </UserContextProvider >
  );
}


export function Child1() {
  return (
    <div className="border p-4">
      <p>Child component</p>
      <div className="w-full grid grid-cols-2 gap-2">
        <GrandChild />
        <Child2 />
      </div>

    </div>
  );
}

export function GrandChild() {
  const userContext = useUserContext();

  const user = userContext?.user;
  return (
    <div className="border p-4">
      <p>GrandChild component</p>
      <p>User Name: {user?.name}</p>
      <p>User Email: {user?.email}</p>
      <p>User Age: {user?.age}</p>
    </div>
  );
}

export function Child2() {
  const userContext = useUserContext();
  const login = userContext?.login;
  const logout = userContext?.logout;


  return (
    <div className="border p-4 *:border *:p-2 space-y-1">
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}