import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../../../../../store/action/actionCreators";
import axios from "../../../../../config/axios";

function EachDone(props) {
  const [showHead, setShowHead] = useState(true);

  const reqIdBackDoing = async (id) => {
    console.log("hello");
    await axios.patch("/todo/goto-doing", { id });

    props.getTodoList();
  };

  return (
    <div
      onMouseOver={() => setShowHead(false)}
      onMouseOut={() => setShowHead(true)}
    >
      {showHead ? (
        <h4>{props.header}</h4>
      ) : (
        <button onClick={() => reqIdBackDoing(props.id)}>Reverse</button>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    goBackDoing: (id) => dispatch(actionCreators.goBackDoing(id)),

    getTodoList: () => dispatch(actionCreators.getTodoList()),
  };
};

export default connect(null, mapDispatchToProps)(EachDone);
