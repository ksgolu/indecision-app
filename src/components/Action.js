//@ts-check
import React from 'react';

const Action = (props) =>  //this is stateless functional component
{
    return (
        <article >
            <button
                className='big-button' 
                onClick={props.handPick}
                disabled={!props.hasOptions}
            >
                What should I do
            </button>
        </article>
    );
}

export default Action;


// class Action extends React.Component
// {
    
//     render()
//     {
//         return (
//             <article>
//                 <button onClick={this.props.handPick}
//                         disabled={!this.props.hasOptions}>
//                     What should I do
//                 </button>
//             </article>
//         );
//     }
// }

