import {createStore} from 'redux';
import { initState, Reducer } from './Reducer';

export const ConfigureStore=()=>{
    const store = createStore(Reducer, initState);
    return store;
}