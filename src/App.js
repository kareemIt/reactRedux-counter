import React from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

export default function App() {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
