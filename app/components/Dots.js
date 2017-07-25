/**
 * Created by 96004 on 2017/7/25.
 */
import React, {Component} from 'react';
import './Dots.less'
export default class Dots extends Component {
    render() {
        return (
           <div className="dots">
               {
                   this.props.images.map((image,index)=>(
                       <span onClick={()=>this.props.turn(index-this.props.index)} className={"dot "+(index==this.props.index||this.props.index==4&&index==0?"active":"")} key={index}></span>
                   ))
               }
           </div>
        )
    }
}