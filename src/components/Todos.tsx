import React, { FC } from "react";
import { Todo } from "../models/todo";
import TodoItem from "./TodoItem";

type TodosProps = {
  children?: React.ReactNode;
  items: Todo[];
};

const Todos: FC<TodosProps> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
