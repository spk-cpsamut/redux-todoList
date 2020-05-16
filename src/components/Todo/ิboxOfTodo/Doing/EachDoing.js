import React, { useState } from "react";

import { connect } from "react-redux";
import { actionCreators } from "../../../../store/action/actionCreators";

function EachDoing(props) {
  const [showDes, setShowDes] = useState(false);

  return (
    <div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
      <input
        type="checkbox"
        value={props.header}
        onChange={(e) => props.updateTodo(e.target.checked, props.id)}
      />
      <h4
        onMouseOver={() => setShowDes(true)}
        onMouseOut={() => setShowDes(false)}
      >
        {props.header}
      </h4>

      {showDes ? props.description : null}
      <br />
      <br />
      <br />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTodo: (checked, id) =>
      dispatch(actionCreators.updateTodo(checked, id)),
  };
};

export default connect(null, mapDispatchToProps)(EachDoing);
