import {increment, decrement} from '../reducers/counter'
import { INCREMENT, DECREMENT } from './types';


export const handleCounter = (e, dispatch, loggedIn, action) => {
    if(loggedIn){
        switch(action){
            case INCREMENT:
                dispatch(increment());
                break;
            case DECREMENT:
                dispatch(decrement());
                break;
            default:
                break;
        }
    }
}