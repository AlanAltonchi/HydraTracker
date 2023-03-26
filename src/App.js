import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import {increment, decrement} from './reducers/counter'
import { login } from './reducers/isLogged';
import { tryLogin } from './services/api';

function App (){
  const counter = useSelector(state => state.counter);
  const loggedIn = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
  
    try {
      const userData = await tryLogin(username.value, password.value);
      // do something with the userData, such as setting it to state or redirecting the user to another page
      dispatch(login());
    } catch (error) {
      // handle the error, such as displaying an error message to the user
    }
  };

  return (
    <>
    <h1>Counter: {counter.count}</h1>
    <h1>Logged: {loggedIn ? 'Logged in' : 'Logged out'}</h1>
    <Button onClick={() => dispatch(increment())}>Increment</Button>
    <Button onClick={() => dispatch(decrement())}>Decrement</Button>
    <form onSubmit={handleLogin}>
    <input type="text" name="username" placeholder="Username" />
    <input type="password" name="password" placeholder="Password" />
    <Button type="submit">Login</Button>
  </form>
    </>
  );
};

export default App;
