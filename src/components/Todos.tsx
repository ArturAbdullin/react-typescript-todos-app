import React, { FC } from "react";
import { Todo } from "../models/todo";


type TodosProps = {
  children?: React.ReactNode;
  items: Todo[];
};

const Todos: FC<TodosProps> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
