/**
 * Created by 96004 on 2017/8/1.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions';
import {bindActionCreators} from 'redux';
class Todos extends Component{
    handleKeyDown=(e)=>{
        let keyCode = e.keyCode;
        if(keyCode==13){
            let text=e.target.value;
            this.props.addTodos(text)
            e.target.value=''
        }
    }
    render() {
        return (
            <div>
                <input type="text" onKeyDown={this.handleKeyDown}/>
                <ul ref="liArry">
                    {
                        this.props.list.map((item,index)=>(
                            <li key={index}>{item}<button onClick={()=>this.props.deleteTodos(index)}>delete</button></li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
let mapStateToProps=state=>({
    list:state.todos.list
});
let mapDispathToProps=dispatch=>bindActionCreators(actions,dispatch)
export default connect(
    mapStateToProps,
    mapDispathToProps
)(Todos)