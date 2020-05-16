import React from "react";
import { Col, Row } from "antd";

function ButtonToDone(props) {
  const checkTargetsAndGoToDone = () => {
    const todoList = props.todoList.filter((todo) => {
      return todo.checked === true;
    });

    const targetsId = todoList.map((todo) => {
      return todo.id;
    });
    console.log(targetsId);
    props.targetsGoToDone(targetsId);
  };

  return (
    <Col span={3} style={{ width: "100%", height: "500px" }}>
      <Row style={{ width: "100%", height: "300px " }} algin="middle">
        <Col style={{ display: "block", margin: "auto" }}>
          <button onClick={checkTargetsAndGoToDone}>go to done</button>
        </Col>
      </Row>
    </Col>
  );
}

export default ButtonToDone;
