/**
 * Created by 96004 on 2017/7/25.
 */
import React, {Component} from 'react';
import './slider.less'
import SliderItems from "./SliderItems";
export default class Slider extends Component {
    constructor() {
        super();
        this.state = {index: 0}
    }

    go = () => {
        this.timer = setInterval(() => {
            this.turn(1)
        }, this.props.delay*1000)
    }
    turn = (step) => {
        let index = this.state.index + step;
        if (index > this.props.images.length) {
            this.sliders.style.transitionDuration = '0s';
            this.sliders.style.left = 0;
            index = 1;
            window.getComputedStyle(this.sliders, null).left;
            this.sliders.style.transitionDuration = this.props.speed + 's';
            this.setState({index});
            return;
        } else if (index < 0) {
            this.sliders.style.transitionDuration = '0s';
            this.sliders.style.left = this.props.images.length * -740 + 'px';
            window.getComputedStyle(this.sliders, null).left;
            index = this.props.images.length - 1;
            this.sliders.style.transitionDuration =this.props.speed + 's';
            this.setState({index});
            return
        }
        this.setState({index});
    }
    setSliders = (ref) => {
        this.sliders = ref
    }

    componentDidMount() {
        if(this.props.autoPlay){
            this.go();
        }
    }

    render() {
        return (
            <div className="slider-wrapper"
                 onMouseOver={() => clearInterval(this.timer)}
                 onMouseOut={this.go}
            >
                <SliderItems speed={this.props.speed} setSliders={this.setSliders} images={this.props.images} index={this.state.index}/>
            </div>
        )
    }
}