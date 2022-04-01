import React from 'react';

const Date = ({prop, value, onChange}) => {
    return (
        <>
            <input value={value} onChange={onChange} className='input mb-20' type='date' />
        </>
    );
};

export default Date;