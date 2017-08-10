/**
 * Created by 96004 on 2017/8/2.
 */
import React,{Component} from 'react'
import Title from "./Title";
import Content from "./Content";
import PropTypes from 'prop-types'
export default class App extends Component{
    constructor() {
        super();
        this.state={color:'red'}
    }
    static childContextTypes={
        color:PropTypes.string,
        changeColor:PropTypes.func
    }
    getChildContext() {
        return {
            color:this.state.color,
            changeColor:this.changeColor
        }
    }
    changeColor=(color)=>{
        this.setState({color})
    }
    render() {
        return (
            <div style={{color:this.state.color}}>
                App
                <Title/>
                <Content/>
            </div>
        )
    }
}