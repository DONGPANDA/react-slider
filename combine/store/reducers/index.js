/**
 * Created by 96004 on 2017/8/1.
 */
import counter from './counter';
import todos from './todos';
import {combineReducers} from 'redux';
let reducers = combineReducers({
    counter,
    todos
})
export default reducers;