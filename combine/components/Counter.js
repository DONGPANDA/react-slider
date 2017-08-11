/**
 * Created by 96004 on 2017/8/1.
 */
import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import actions from '../store/actions';
import {connect} from 'react-redux';
class Counter extends Component{
    render() {
        return (
            <div>
                <p>{this.props.number}</p>
                <button onClick={this.props.add}>+</button>
                <button onClick={this.props.sub}>-</button>
            </div>
        )
    }
}
let mapStateToProps=(state)=>({
    number:state.counter.number
})
let mapDispatchToProps=dispatch=>bindActionCreators(actions,dispatch);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)