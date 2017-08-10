/**
 * Created by 96004 on 2017/8/2.
 */
import React from 'react';
import ReactDOM from 'react-dom';
let ToPanel = (OldComponent) => {
    class Panel extends React.Component {
        render() {
            return (
                <div style={{border: '1px solid red'}}>
                    <OldComponent/>
                </div>
            )
        }
    }
    return Panel;
}
let Hello=()=><h1>hello</h1>
let NewPanel=ToPanel(Hello)
ReactDOM.render(<NewPanel/>,document.querySelector("#root"))