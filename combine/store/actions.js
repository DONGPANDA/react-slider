/**
 * Created by 96004 on 2017/8/2.
 */
import * as types from './action-types'
export default {
    add() {
        return {type:types.ADD}
    },
    sub() {
        return {type:types.SUB}
    },
    addTodos(text,index) {
        return {type:types.ADD_TODO,text,index}
    },
    deleteTodos(index) {
        return {type:types.DELETE_TODO,index}
    }
}