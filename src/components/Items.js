import React from "react";

const Items = function (props) {
  const { item, idx, onRemove } = props;

  //const handleRemove = function () {
  //const updateInfo =
  //};

  return (
    <div>
      <h1>{item}</h1>
      <button id={`remove-${item}`} onClick={() => onRemove(idx)}>
        Remove
      </button>
    </div>
  );
};

export default Items;
