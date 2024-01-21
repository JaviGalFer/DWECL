import React from 'react';


export function Intro(props) {
  return (
    <div className='intro'>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}
