import { useAppSelector } from "./hooks";


export default function Profile() {
  const user  = useAppSelector(state => state.user.value)
  const theme = useAppSelector(state => state.theme.value)
  return (
    <div style={{color: theme}}>
      <h1>Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}
