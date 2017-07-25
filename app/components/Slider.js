/**
 * Created by 96004 on 2017/7/25.
 */
import React, {Component} from 'react';
import './slider.less'
import SliderItems from "./SliderItems";
import SliderArrows from "./SliderArrows";
import Dots from "./Dots";
export default class Slider extends Component {
    constructor() {
        super();
        this.state = {index: 0,isMoving:false}
    }

    go = () => {
        this.timer = setInterval(() => {
            this.turn(1)
        }, this.props.delay*1000)
    }
    turn = (step) => {
        if(this.state.isMoving) return;
        this.setState({isMoving:true})
        let index = this.state.index + step;
        if (index > this.props.images.length) {
            this.sliders.style.transitionDuration = '0s';
            this.sliders.style.left = 0;
            index = 1;
            window.getComputedStyle(this.sliders, null).left;
            this.sliders.style.transitionDuration = this.props.speed + 's';
            this.setState({index});
            setTimeout(()=>{
                this.setState({isMoving:false})
            },this.props.speed*1000)
            return;
        } else if (index < 0) {
            this.sliders.style.transitionDuration = '0s';
            this.sliders.style.left = this.props.images.length * -740 + 'px';
            window.getComputedStyle(this.sliders, null).left;
            index = this.props.images.length - 1;
            this.sliders.style.transitionDuration =this.props.speed + 's';
            this.setState({index});
            setTimeout(()=>{
                this.setState({isMoving:false})
            },this.props.speed*1000)
            return
        }
        this.setState({index});
        setTimeout(()=>{
            this.setState({isMoving:false})
        },this.props.speed*1000)
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
                <SliderArrows turn={this.turn}/>
                {this.props.dots?<Dots turn={this.turn} index={this.state.index} images={this.props.images}/>:null}
            </div>
        )
    }
}