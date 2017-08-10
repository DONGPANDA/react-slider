/**
 * Created by 96004 on 2017/7/27.
 */
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from './Home';
import User from './User';
import Profile from './Profile'
import MenuLink from "./MenuLink";
export default class App extends Component {
    render() {
        return (
        <Router>
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <div className="navbar-brand">用户管理系统</div>
                        </div>
                        <ul className="nav navbar-nav">
                            <MenuLink exact={true} to="/" label="首页"/>
                            <MenuLink exact={true} to="/user" label="用户"/>
                            <MenuLink exact={true} to="/profile" label="个人"/>
                        </ul>
                    </div>
                </nav>
                <hr/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/user" component={User}/>
                                <Route path="/profile" component={Profile}/>
                                <Route path="/news/:content"
                                  render={
                                      props=><h1>{props.match.params.content}</h1>
                                  }
                                />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
        )
    }
}