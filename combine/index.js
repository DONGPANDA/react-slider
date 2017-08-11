import React from 'react';
import ReactDOM from 'react-dom';
import Counter from "./components/Counter";
import Todos from "./components/Todos";
import {Provider} from 'react-redux'
import store from './store/store'
ReactDOM.render(
    <Provider store={store}>
        <div>
            <Counter/>
            <Todos/>
        </div>
    </Provider>,
    document.querySelector("#root"))