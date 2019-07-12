import React from 'react';

const Option =  (props) =>
(
   <article className='option' >
       <p className='option__text'>  {props.index}. {props.optionText}</p>
     
        <button
            className=' button--link'            
            onClick={(e)=>
                {props.handleRemove(props.optionText)}}
        >
            Remove
        </button>
    </article>
    
);

export default Option;

//converting above stateless function component to class component 

// class Option extends React.Component
// {
//     render()
//     {
//         const args = this.props;
//         return (
//             <article>
//                 {args.optionText}
//             </article>
//         );
//     }
// }

