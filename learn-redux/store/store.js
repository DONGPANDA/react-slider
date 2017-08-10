/**
 * Created by 96004 on 2017/8/1.
 */
import {createStore} from 'redux';
import * as types from './action-types'
let reducer=(state={number:0},action={})=>{
    switch (action.type){
        case types.ADD:
            return {number:state.number+1};
        case types.SUB:
            return {number:state.number-1};
        default:
            return state;
    }
}
export default createStore(reducer);


