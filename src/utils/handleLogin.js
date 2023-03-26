import { tryLogin } from '../services/api';
import { login } from '../reducers/isLogged';

export const handleLogin = async (e, dispatch) => {
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
