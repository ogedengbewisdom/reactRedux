import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)

  const toggle = useSelector(state => state.showCounter)

  const toggleCounterHandler = () => {
    dispatch({type: "SHOWCOUNT"})
  };

  const increamentHandler = () => {
    dispatch({type: "INCREAMENT"})
  }

  const increaseHandler = () => {
    dispatch({type: "INCREASE", amount: 10})
  }

  const decreamentHandler = () => {
    dispatch({type: "DECREAMENT"})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increamentHandler}>INCREAMENT</button>
        <button onClick={increaseHandler}>INCREASE BY 10</button>
        <button onClick={decreamentHandler}>DECREAMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
