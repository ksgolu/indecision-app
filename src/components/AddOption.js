import React from 'react';

export default class AddOption extends React.Component
{
    state = {
        error:undefined
    }
    // constructor(props)
    // {
    //     super(props)
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.state={
    //         error:undefined
    //     }
    // }


    /*
    * when - handleAddOption() {} - define in this way,
    * it cant access 'this'  when we assing to some 
    * outer scope vriable like:
    * const handler = AddOption.handlAddOption() //return  null
    * ---to fix this we use constructor() function to bind 'this' to variable handler as defined above---
    * 
    * ---------------------------------------------------------------------------------------------------
    * 
    * but if we use arrow function instead of regular function, it treated as own poperty
    * and it bound 'this' to handleAddOption() property
    * const handler = AddOption.handlAddOption() //return something
    * as we saw below
    * 
    */
    handleAddOption = (e) =>
    {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
       
           const errors =  this.props.handleAddOption(option)
            e.target.elements.option.value='';
            e.target.elements.option.focus();  
            this.setState(()=>( {error:errors}));
    }
    render()
    {
        return (
            <article>
                {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
               <form className= 'add-option' onSubmit={this.handleAddOption}>
                   <input className='add-option__input' type ='text' name='option' />
                    <button className='button' >Add option</button>
               </form>
            </article>
        );
    }
}