import {increment, decrement, setCount} from '../reducers/counter'
import { INCREMENT, DECREMENT, SET_COUNT } from './types';
import { tryLogin, setIntake} from '../services/api';
import { login } from '../reducers/isLogged';

export const handleCounter = (e, dispatch, loggedIn, userData, counter, action) => {
    if(loggedIn){
        switch(action){
            case INCREMENT:
                dispatch(increment());
                setIntake(userData.uid, counter + 1)
                break;
            case DECREMENT:
                dispatch(decrement());
                setIntake(userData.uid, counter - 1)
                break;
            default:
                break;
        }
    }
}

export const handleLogin = async (e, dispatch) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
  
    try {
      const userData = await tryLogin(username.value, password.value);
      // do something with the userData, such as setting it to state or redirecting the user to another page
      dispatch(setCount(userData.data.daily_intake))
      dispatch(login(userData.data));
    } catch (error) {
      // handle the error, such as displaying an error message to the user
    }
  };