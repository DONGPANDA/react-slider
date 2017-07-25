/**
 * Created by 96004 on 2017/7/25.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Slider from './components/Slider';
const images = [
    {
        src:require('./image/1.jpg')
    },
    {
        src:require('./image/2.jpg')
    },
    {
        src:require('./image/3.jpg')
    },
    {
        src:require('./image/4.jpg')
    }
];
ReactDOM.render(<Slider autoPlay={true} delay={4} speed={1} arrows={true} dots={true} images={images}/>, document.querySelector("#root"))