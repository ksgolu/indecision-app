//@ts-check
import React from 'react';
import Option from './Option.js'
const Options = (props) =>
{
    return (
            
        <section>
            <article className='widget-header'>
                <h3 className='widget__title'>Your Options</h3>
                <button
                    className='button--link' 
                    onClick={props.handleRemoveAll}
                >
                Remove All
                </button>
            </article>
          
          
            {!props.option.length && <p className='widget__message '>Please add an option to get start</p>}
            {
                props.option.map((item,index)=>(
                <Option 
                        key={index} 
                        optionText ={item}
                        index={index}
                        handleRemove={props.handleRemove}
                />
                ))
            }
        </section>
    );
}
export default Options;
//Class component of above code

// class Options extends React.Component //class component , when we need state we use class
// {    
//     render()
//     {
//         const args = this.props;
//         console.log(args);
//         return (
            
//             <article>
//                {/* <p>{args.option.length}</p> */}
//                <button onClick={args.handleRemoveAll}>Remove All</button>
//                 {
//                     args.option.map((item,index)=><Option key={index} optionText ={item}/>)
//                 }
//             </article>
//         );
//     }
// }

