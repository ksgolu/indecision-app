//@ts-check

import React, {useState} from 'react';
import ReactDOM from 'react-dom';
//import * as serviceWorker from './serviceWorker';

const app = {
    title: 'Indecission app',
    subtitle: 'Put your life in the hand of a computer',
    option: []
};
const onFormSubmit = (e)=>
{
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option)
    {
    app.option.push(option);
    e.target.elements.option.value='';
    render();
    }
}
const onRandom = () =>
{
    const randomNum = Math.floor((Math.random() * app.option.length));
    const option = app.option[randomNum]
    alert(option);
}
const resetArr =()=>
{
    app.option.splice(0);
    render();
}
let visibility = false;
const toggleShow = ()=>
{
  visibility = !visibility;
    render();
}
const render = () =>
{
const template = (
    <section>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
       <p>{app.option.length > 0 ? 'Here are your option' :'No option' }</p>
       <button disabled = {app.option.length===0} onClick={onRandom}>What should I do?</button>
        <button onClick={resetArr}>Remove All</button>
        
        <ol>
            {
                app.option.map((item,index)=><li key ={index}>{item}</li>)
            }
        </ol>
        
        
        <form onSubmit = {onFormSubmit}>
            <input type='text' name='option'/>
            <button>Add option</button>
        </form>
    <button onClick={toggleShow}>
        {visibility ? 'hide details' : 'show details'}
    </button>
    {visibility && (<p>'hey iam satyam'</p>)}
    
    </section>
);
ReactDOM.render(template,document.getElementById('root'))
}

render();













 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();


// paste the below code after template

// const user = 
// {
//     name: 'satyam',
//     age:27,
//     location:'Munger'
// }
// function getLocation(location)
// {
//     if(location)
//         return <p>Location: {location}</p>
// }

// const jsx = (
//     <section>
//         <h1>Name: {user.name ? user.name: 'Name required'}</h1>  
//         {user.age >= 18 && <p>Age: {user.age} </p>}
//         {getLocation(user.location)}

//     </section>
// );
