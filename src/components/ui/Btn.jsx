import React from 'react';

const Btn = ({prop, onClick}) => {
    return (
        <>
            <span type='submit' className={prop.class} hef='#' onClick={onClick}>{prop.text} </span>
        </>
    );
};

export default Btn;