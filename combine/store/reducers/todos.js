/**
 * Created by 96004 on 2017/8/1.
 */
import * as types from '../action-types';
let initState={
    list:[]
}
export default function (state = initState, action) {
    switch (action.type){
        case types.ADD_TODO:
            return {list:[...state.list,action.text]}
        case types.DELETE_TODO:
            state.list=state.list.filter((item,index)=>index!=action.index)
            return {list:state.list};
        default:
            return state;
    }
}
