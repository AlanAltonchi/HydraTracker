import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import {increment, decrement} from './reducers/counter'
import { handleLogin } from './utils/handleLogin';

function App (){
  const counter = useSelector(state => state.counter);
  const loggedIn = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter: {counter.count}</h1>
      <h1>Logged: {loggedIn ? 'Logged in' : 'Logged out'}</h1>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      <form onSubmit={(e) => handleLogin(e, dispatch)}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <Button type="submit">Login</Button>
      </form>
    </>
  );
};

export default App;
