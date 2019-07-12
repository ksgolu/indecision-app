//@ts-check

import React from 'react';

const Header = (props)=>
(    
    <header className='header'>
        <article className='container'>
            <h1 className='header__title'>{props.title}</h1>
            {props.subtitle && <h4 className='header__subtitle'>{props.subtitle}</h4>}
        </article>
    </header>
    
);
Header.defaultProps=
{
   title:'Indecision' ,
}

export default Header;
// class Header extends React.Component
// {
//     render(){
//         const args = this.props;
//         return (
//             <section>
//                 <h1>{args.title}</h1>
//                 <h4>{args.subtitle}</h4>
//             </section>
//         );
//     }
// }

