import React, { Component } from 'react';

const BandForm = ({addMember}) => {
    let input;
  
    return (
      <div>
        <input ref={node => {
          input = node;
        }} />
        <button onClick={() => {
          addMember(input.value);
          input.value = '';
        }}>
          +
        </button>
      </div>
    );
};

export default BandForm;
