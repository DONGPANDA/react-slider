/**
 * Created by 96004 on 2017/7/25.
 */
import React, {Component} from 'react';
import SliderItem from "./SliderItem";
export default class SliderItems extends Component {
    componentDidMount() {
        this.props.setSliders(this.refs.sliders);
    }
    render() {
        let style = {
            width: (this.props.images.length+1) * 740 + 'px',
            transitionDuration:this.props.speed + 's',
            left: this.props.index * -740 + 'px'
        }
        return (
            <ul ref="sliders" style={style} className="sliders">
                {
                    this.props.images.map((item, index) => (
                        <SliderItem image={item} key={index}/>
                    ))
                }
                <SliderItem image={this.props.images[0]} index={this.props.images.length}/>
            </ul>
        )
    }
}