import React from "react";
import { Col } from "antd";
import EachDone from "./Doing/Done/EachDone";

function Done(props) {
  const doneTodoList = props.todoList.filter((todo) => todo.done === true);
  return (
    <Col span={8} className="box-todo">
      {doneTodoList.map((todo) => {
        return (
          <EachDone
            id={todo.id}
            header={todo.header}
            description={todo.description}
            key={todo.id}
          />
        );
      })}
    </Col>
  );
}

export default Done;
