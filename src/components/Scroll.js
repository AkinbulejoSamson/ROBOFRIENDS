import React from "react";

const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', overflow: 'auto', border: '1px solid black', height: '795px' }}>
      {props.children}
    </div>
  );
}

export default Scroll;