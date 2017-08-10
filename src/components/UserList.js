/**
 * Created by 96004 on 2017/7/27.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
let utils=require('../utils');
export default class UserList extends Component {
    constructor() {
        super();
        this.state={users:[]}
    }
    componentWillMount() {
        let users=utils.getUser()
        this.setState({users})
    }
    render() {
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>用户名</th>
                        <th>邮箱</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.users.map((item,index)=>(
                        <tr key={index}>
                            <td><Link to={"/user/detail/"+item.id}>{item.username}</Link></td>
                            <td>{item.email}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        )
    }
}