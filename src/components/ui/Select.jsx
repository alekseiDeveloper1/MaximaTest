import React from 'react';

const Select = ({prop, value, onChange}) => {
    return (
        <>
           <select value={value} onChange={onChange} className='input mb-20'>
               <option>{prop}</option>
               <option>Back</option>
               <option>c#</option>
               <option>Python</option>
           </select>
        </>
    );
};

export default Select;