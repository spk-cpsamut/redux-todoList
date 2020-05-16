import React from "react";
import { Col, Row } from "antd";
import EachDoing from "./Doing/EachDoing";

function Doing(props) {
  const todoIsDoing = props.todoList.filter((todo) => todo.done === false);

  return (
    <Col span={8} className="box-todo">
      <Row justify="center" style={{ width: "100%" }}>
        {todoIsDoing.map((todo) => {
          return (
            <EachDoing
              header={todo.header}
              description={todo.description}
              id={todo.id}
              key={todo.id}
            />
          );
        })}
      </Row>
    </Col>
  );
}

export default Doing;
