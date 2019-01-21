import React from 'react';

export default ({bench}) => {
  return (
    <li key={bench.id}>
      <p>{bench.description}</p>
      <p>{bench.lat}</p>
      <p>{bench.lng}</p>
    </li>
  )
}