/**
 * Created by 96004 on 2017/8/1.
 */
export const createStore=(reducer)=>{
    let state;
    let getState=()=>state;
    let listensers=[];
    let dispatch=(action)=>{
        state=reducer(state,action);
        listensers.forEach(listener=>listener())
    }
    let subscribe=(listener)=>{
        listensers.push(listener);
    }
    dispatch();
    return {
        getState,
        dispatch,
        subscribe
    }
}