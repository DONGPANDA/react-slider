/**
 * Created by 96004 on 2017/8/2.
 */
import React,{Component} from 'react'
import ColorButton from "./ColorButton";
import PropTypes from 'prop-types'
export default class Content extends Component{
    static contextTypes={
        color:PropTypes.string
    }
    render() {
        return (
            <div style={{color:this.context.color}}>
                Content
                <ColorButton/>
            </div>
        )
    }
}