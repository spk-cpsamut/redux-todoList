import React from "react";
import { Row, Col } from "antd";

function AddNewTodo(props) {
  console.log(props.header);
  return (
    <div>
      <Row justify="center">
        <Col span={4}>
          <input
            type="text"
            placeholder="     หัวข้อ"
            onChange={(e) => props.changeInputHeader(e.target.value)}
            value={props.header}
          />
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <textarea
          rows="4"
          cols="50"
          value={props.description}
          onChange={(e) => props.changeInputDes(e.target.value)}
        ></textarea>
      </Row>
      <Row justify="center">
        <button
          onClick={() => props.addNewTodo(props.header, props.description)}
        >
          Add new Todo
        </button>
      </Row>
    </div>
  );
}

export default AddNewTodo;
