import React, { useEffect } from "react";
import { Row, Col } from "antd";
import Doing from "./ิboxOfTodo/Doing";
import ButtonToDone from "./ิboxOfTodo/ButtonToDone";
import Done from "./ิboxOfTodo/Done";
import AddNewTodo from "./ิboxOfTodo/AddNewTodo";
import { connect } from "react-redux";

import { actionCreators } from "../../store/action/actionCreators";
import { actionTypes } from "../../store/action/actionTypes";

function Todo(props) {
  useEffect(() => {
    if (localStorage.getItem("ACCESS_TOKEN")) {
      console.log("hello");
      props.getTodoList();
    }
  }, []);
  return (
    <div className="todo">
      <Row justify="space-around">
        <Doing todoList={props.todoList} />
        <ButtonToDone
          targetsGoToDone={props.targetsGoToDone}
          todoList={props.todoList}
        />
        <Done todoList={props.todoList} />
      </Row>
      <AddNewTodo
        changeInputHeader={props.changeInputHeader}
        header={props.header}
        changeInputDes={props.changeInputDes}
        description={props.description}
        addNewTodo={props.addNewTodo}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todo.todoList,
    header: state.todo.header,
    description: state.todo.description,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputHeader: (input) =>
      dispatch(actionCreators.changeInputHeader(input)),

    changeInputDes: (input) =>
      dispatch(actionCreators.changeInputFooter(input)),

    addNewTodo: (header, description) =>
      dispatch(actionCreators.addNewTodo(header, description)),
    targetsGoToDone: (id) => dispatch(actionCreators.goToDone(id)),
    getTodoList: () => dispatch(actionCreators.getTodoList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
