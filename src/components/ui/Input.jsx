import React from 'react';

const Input = ({prop, value, onChange}) => {
    return (
        <>
            <input value={value} onChange={onChange} placeholder={prop} className='input mb-20'/>
        </>
    );
};

export default Input;