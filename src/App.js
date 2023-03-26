import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { handleLogin, handleCounter } from './utils/handlers';
import { INCREMENT, DECREMENT } from './utils/types';

function App (){
  const counter = useSelector(state => state.counter);
  const loggedIn = useSelector(state => state.isLogged.logged);
  const userData = useSelector(state => state.isLogged.userData);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter: {counter.count}</h1>
      <h1>Logged: {loggedIn ? 'Logged in as ' + userData.username : 'Logged out'}</h1>
      <Button onClick={(e) => handleCounter(e,dispatch, loggedIn, userData, counter.count, DECREMENT)}>Decrement</Button>
      <Button onClick={(e) => handleCounter(e,dispatch, loggedIn, userData, counter.count, INCREMENT)}>Increment</Button>
      <form onSubmit={(e) => handleLogin(e, dispatch)}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <Button type="submit">Login</Button>
      </form>
    </>
  );
};

export default App;
