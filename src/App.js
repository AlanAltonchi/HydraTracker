import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { handleLogin } from './utils/handleLogin';
import { handleCounter } from './utils/handleCounter';
import { INCREMENT, DECREMENT } from './utils/types';

function App (){
  const counter = useSelector(state => state.counter);
  const loggedIn = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter: {counter.count}</h1>
      <h1>Logged: {loggedIn ? 'Logged in' : 'Logged out'}</h1>
      <Button onClick={(e) => handleCounter(e,dispatch, loggedIn, INCREMENT)}>Increment</Button>
      <Button onClick={(e) => handleCounter(e,dispatch, loggedIn, DECREMENT)}>Decrement</Button>
      <form onSubmit={(e) => handleLogin(e, dispatch)}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <Button type="submit">Login</Button>
      </form>
    </>
  );
};

export default App;
