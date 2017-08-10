/**
 * Created by 96004 on 2017/7/27.
 */
import React, {Component} from 'react';
let utils=require('../utils');
export default class UserAdd extends Component {
    handleSubmit=()=>{
        let username=this.refs.username.value;
        let email=this.refs.email.value;
        utils.saveUser({username,email});
        this.props.history.push('/user/list');
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label className="control-label">用户名</label>
                    <input ref="username" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="control-label">邮箱</label>
                    <input ref="email" type="email" className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary"/>
                </div>
            </form>
        )
    }
}