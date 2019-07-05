import React from 'react';

export default function TodoItem({ todo,key }) {
  return (
    <li key={key}>
      {todo}
    </li>
  );
}