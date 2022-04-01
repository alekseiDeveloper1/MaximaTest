import React from 'react';

const Textarea = ({prop, value, onChange}) => {
    return (
        <>
            <input value={value} onChange={onChange} placeholder={prop} className='input input-big mb-20'/>
        </>
    );
};

export default Textarea;