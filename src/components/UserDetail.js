/**
 * Created by 96004 on 2017/7/27.
 */
import React,{Component} from 'react';
let utils = require('../utils');
export default class UserDetail extends Component {
    constructor() {
        super();
        this.state={user:{}}
    }
    handleClick=()=>{
        utils.deleteUser(this.state.user.id);
        this.props.history.push("/user/list")
    }
    componentWillMount() {
        let id=this.props.match.params.id;
        let users=utils.getUser();
        let user=users.find((item)=>item.id==id);
        console.log(user);
        this.setState({user})
    }
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <button onClick={()=>this.props.history.goBack()} className="btn btn-primary">返回</button>
                </div>
                <div className="panel-body">
                    ID:{this.state.user.id}<br/>
                    用户名:{this.state.user.username}<br/>
                    邮箱:{this.state.user.email}<br/>
                </div>
                <div className="panel-footer">
                    <button onClick={this.handleClick} className="btn btn-danger">删除</button>
                </div>
            </div>
        )
    }
}