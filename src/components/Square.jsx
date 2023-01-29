import React from 'react';

export const Square = (props) => {
  return (
    <button
      className="square" data-position={props.position} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
