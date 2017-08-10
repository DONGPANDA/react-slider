/**
 * Created by 96004 on 2017/8/1.
 */
import {createStore,combineReducers} from 'redux';
import reducers from './reducers/index'
let store = createStore(reducers);
//调试
window.store=store;
export default store;