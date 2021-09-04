import React from 'react';
import Input from './Input';

const inputs = [
    {label: 'Name', type: 'text', placeholder: 'type name'},
    {label: 'Email', type: 'email', placeholder: 'type email'},
    {label: 'Password', type: 'password', placeholder: 'type password'},
]

function Form(props) {
    const { title} = props;
    return (
        <form className="form">
            <span>{title}{' '}</span>
            <br/>
            {inputs.map(item => (
                <Input label={item.label} placeholder={item.placeholder} type={item.type} />
            ))}
        </form>
    )
}

export default Form;