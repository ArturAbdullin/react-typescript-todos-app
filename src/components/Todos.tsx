import React, {FC} from 'react'

type TodosProps = {
  children?: React.ReactNode;
  items: string[];
}

const Todos: FC<TodosProps> = (props) => {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default Todos
