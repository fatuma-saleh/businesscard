export default function NavTop(props) {
  return (
    <fr>
      <button onClick={() => props.onClick("MainPage")}>Main Page</button>
      <button onClick={() => props.onClick("MyCards")}>My Cards</button>
      <button onClick={() => props.onClick("")}>Saved Cards</button>
      <button onClick={() => props.onClick("")}>New Cards</button>
      <button onClick={() => props.onClick("")}>Register</button>
      <button onClick={() => props.onClick("")}>Login</button>
    </fr>
  )
}
