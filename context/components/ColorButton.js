/**
 * Created by 96004 on 2017/8/2.
 */
import React,{Component} from 'react'
import PropTypes from 'prop-types'
export default class ColorButton extends Component{
    static contextTypes={
        color:PropTypes.string,
        changeColor:PropTypes.func
    }
    render() {
        return (
            <div>
                Button
                <button onClick={()=>this.context.changeColor('red')} style={{color:'red'}}>Red</button>
                <button onClick={()=>this.context.changeColor('blue')} style={{color:'blue'}}>Blue</button>
            </div>
        )
    }
}