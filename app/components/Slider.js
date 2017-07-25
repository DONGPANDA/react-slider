/**
 * Created by 96004 on 2017/7/25.
 */
import React, {Component} from 'react';
import './slider.less'
export default class Slider extends Component {
    constructor() {
        super();
        this.state = {index: 0}
    }

    go = () => {
        this.timer = setInterval(() => {
            this.turn(1)
        }, 2000)
    }
    turn = (step) => {
        let index = this.state.index + step;
        if(index>=this.props.images.length){
            index=0;
        }
        this.setState({index});
    }
    componentDidMount() {
        this.go();
    }

    render() {
        let style = {
            width: this.props.images.length * 740 + 'px',
            transitionDuration: '1s',
            left: this.state.index * -740 + 'px'
        }
        return (
            <div className="slider-wrapper"
                 onMouseOver={()=>clearInterval(this.timer)}
                 onMouseOut={this.go}
            >
                <ul style={style} className="sliders">
                    {
                        this.props.images.map((item, index) => (
                            <li className="slider" key={index}>
                                <img src={item.src} alt=""/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}