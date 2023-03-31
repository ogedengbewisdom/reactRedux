import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { useState } from 'react';

const Counter = () => {
  const [toggle, setToggle] = useState(false)
  const dispatch = useDispatch()

  const counter =useSelector(state => state.counter)

  const toggleCounterHandler = () => {
    setToggle((prev) => !prev)
  };

  const increamentHandler = () => {
    dispatch({type: "INCREAMENT"})
  }

  const decreamentHandler = () => {
    dispatch({type: "DECREAMENT"})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      {toggle && <div>
        <button onClick={increamentHandler}>INCREAMENT</button>
        <button onClick={decreamentHandler}>DECREAMENT</button>
      </div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
