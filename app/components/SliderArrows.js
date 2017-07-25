/**
 * Created by 96004 on 2017/7/25.
 */
import React, {Component} from 'react';
import './SliderArrows.less'
export default class SliderArrows extends Component {
    render() {
        return (
            <div className="slider-arrows">
                <span onClick={()=>this.props.turn(-1)} className="arrow arrow-left">&lt;</span>
                <span onClick={()=>this.props.turn(1)} className="arrow arrow-right">&gt;</span>
            </div>
        )
    }
}