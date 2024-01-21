import React from 'react';
import { Data } from './Data';
import { Avatar } from './Avatar';

export function App() {
  const IMG_SRC = 'assets/img/card-image.jpg';

  return (
    <div className='card'>
      <Avatar src={IMG_SRC} />
      <Data />
    </div>
  );
}
