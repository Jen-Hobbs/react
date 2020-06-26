import React from 'react';

function PlayerChoice(props) {
  return (
  <div style={{ border: '2px solid black', padding: 15, display: 'inline-block' }}>
    <h2>{props.choice}</h2>
    <button onClick={() => props.onClickButton(props.choice)}>Click</button>
  </div>
  );
}

export default PlayerChoice;