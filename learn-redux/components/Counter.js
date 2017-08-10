/**
 * Created by 96004 on 2017/8/1.
 */
import React,{Component} from 'react'
import store from '../store/store'
import * as types from '../store/action-types'
export default class Counter extends Component {
    constructor() {
        super();
        this.state={number:0}
    }
    componentDidMount() {
        this.unsubscribe=store.subscribe(()=>{
            this.setState({number:store.getState().number})
        })
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
    add=()=>{
        store.dispatch({type:types.ADD})
    }
    sub=()=>{
        store.dispatch({type:types.SUB})
    }
    render() {
        return(
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.add}>+</button>
                <button onClick={this.sub}>-</button>
                <button onClick={this.unsubscribe}>别理我</button>
                <button onClick={this.props.killMe}>kill</button>
            </div>
        )
    }
}