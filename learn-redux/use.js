/**
 * Created by 96004 on 2017/8/1.
 */
export const reducer=(state={number:0},action={})=>{
    switch (action.type){
        case 'ADD':
            return {number:state.number+1};
        case 'SUB':
            return {number:state.number-1};
        default:
            return state;
    }
}
