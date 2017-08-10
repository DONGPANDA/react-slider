/**
 * Created by 96004 on 2017/8/1.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from "./components/Counter";
function killMe() {
    ReactDOM.unmountComponentAtNode(document.querySelector("#root"));
}
ReactDOM.render(<Counter killMe={killMe}/>,document.querySelector("#root"))