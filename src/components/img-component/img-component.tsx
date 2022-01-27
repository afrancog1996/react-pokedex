import React from 'react';
import './img-component.css'

function Img(props: any) {
    return (
        <div className='ctl-img'>
            {props?.side === 1 && <img src={props?.data?.sprites?.front_default} alt="pokemon" />}
            {props?.side === 2 && <img src={props?.data?.sprites?.back_default} alt="pokemon" />}
        </div>
    );
}

export default Img;