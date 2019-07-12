import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

let count = 0;
const addOne = ()=>
{
    count++;
    render();
}

const reset = ()=>
{
    count = 0;
    render();
}

const minusOne = () =>
{
    count--;
    render();
    
}
const appRoot = document.getElementById('root');
const render = () =>{
const countTemplate = (
    <section>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick ={reset}>Reset</button>
        <button onClick={minusOne}>-1</button>
    </section>
   
);
ReactDOM.render(countTemplate, appRoot); 
};

render();

serviceWorker.unregister();