//@ts-check

import React from 'react';

import AddOption from './AddOption.js'
import Options from './Options'
import Action from './Action.js' 
import Header from './Header'
import OptionModal from './OptionModal';
export default class IndecissionApp extends React.Component
{
    state ={
        option:[],
        selectedOption:undefined

    }
    // constructor(props)
    // {
    //     super(props)
    //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
    //     this.handPick = this.handPick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleRemove = this.handleRemove.bind(this);
    //     this.state ={
    //         option:[],
    //     }
        
    // }


     /*
     * these three are life cylce of react 
     *and can only used inside class component:
     *
     * componentDidMount() - fire when first time class component render
     * componentDidUpdate() - fire when class compount re-render
     * ComponentWillMount() - fire when a completly new component render instead of older class compount 
     *                      i.e rendering a new component 
     * 
     * All there have two arguments
     * 1. prevProps - previous props of component
     * 2. prevState - previous satate of component
     */

     componentDidMount()
     {
         //fetching from localstorage when first the app run
         const parse =  JSON.parse(localStorage.getItem('option'));
        try {
            if (parse) {
                // this.state.option=parse
                this.setState(()=>({option: parse}))
            }
        } catch (e) {
            
        }
        
        
     }
     componentDidUpdate(prevProps, prevState)
     {
         if(prevState.option.length !== this.state.option.length)
         {
             const json = JSON.stringify(this.state.option)
             localStorage.setItem('option',json)
         }
        //  console.log('Props ',prevProps);
        //  console.log('state ', prevState);
         
     }
    componentWillMount()
    {
       
    }
    handleRemoveAll = () =>
    {
        // this.setState(()=>
        // {
        //     return {
        //         option: []
        //     };
        // });

        // identical to above, to return an object directly use parenthesis
        this.setState(()=> ( { option:[] } ) );
    }

    handleRemove = (option) =>
    {
        this.setState((prevState)=>({option: prevState.option.filter((item)=>item !== option)}));
    }

    handPick = () =>
    {
       const randomNum = Math.floor(Math.random()* this.state.option.length)
       const option = this.state.option[randomNum] 
       //alert(option);
       this.setState((prevstate)=> ({selectedOption: option}))
    }

    handleRemoveSelectedOption = () =>
    {
        this.setState(()=>({selectedOption:undefined}))
    }

    handleAddOption = (option) =>
    {
        if(!option)
            return 'Enter valid value to add option'
        else if(this.state.option.indexOf(option) > -1)
            return 'option already exists'

        this.setState((prevState)=> ({ option :  prevState.option.concat(option) }));       
    }
   
    render()
    {
        //const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        return(
            <section>
                <header className=''>
                    < Header subtitle={subtitle} />
                </header>
                <main className='container'>
                    <section>
                        <Action 
                            hasOptions={this.state.option.length > 0}
                            handPick = {this.handPick}
                        />
                    </section>

                    <section className='widget'>
                        < Options 
                            option={this.state.option}
                            handleRemoveAll={this.handleRemoveAll}
                            handleRemove={this.handleRemove}
                            />
                        < AddOption handleAddOption = {this.handleAddOption}/>
               
                    </section>
                   
                </main>

                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleRemoveSelectedOption = {this.handleRemoveSelectedOption}
                />
            </section>
        );
    }
}
   

