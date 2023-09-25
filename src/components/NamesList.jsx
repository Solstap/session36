import { nanoid } from "nanoid"
import MyComponent from "./MyComponents"

function NamesList({ people }) {
  return (
    <ul>
      {people.map((p) => <MyComponent key={nanoid()} name={p.name} age={p.age} birthday={p.birthday} />)}
    </ul>
  )
}

export default NamesList