import React, {useState} from 'react';
import {TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import useLocalStorage from '../hooks/useLocalStorage';
import staticUsers from '../data/staticUsers';

const inputs = [
    {label: 'Name', type: 'text', placeholder: 'type name'},
    {label: 'Email', type: 'email', placeholder: 'type email'},
    {label: 'Password', type: 'password', placeholder: 'type password'},
]

const useStyles = makeStyles(()=>({
    root: {
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    field: {
        width: '100%',
        maxWidth: '800px',
    },
    submit: {
        width: '100%',
        maxWidth: '800px',
        marginTop: '10px'
    }
}))

const Form = ({ title }) => {
    const classes = useStyles()
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('')
    const [storedValue, setValue] = useLocalStorage("users", staticUsers);
    const handleSubmit = (e) => {
        e.preventDefault();
        const id = storedValue[storedValue.length-1]?.id + 1;
        if (name && surname) {
            setValue([...storedValue, { id, name, surname, email, address }])
            setName('')
            setSurname('')
            setEmail('')
            setAddress('')
        }

        
    }
    return (
        <form className="form" onSubmit={(e) => handleSubmit(e)} className={classes.root}>
            <span>{title}{' '}</span>
            <br/>
            <TextField label="name" value={name} onChange={e => setName(e.target.value)} classes={{root: classes.field}}/>
            <TextField label="surname" value={surname} onChange={e => setSurname(e.target.value)} classes={{root: classes.field}}/>
            <TextField label="email" value={email} onChange={e => setEmail(e.target.value)} classes={{root: classes.field}}/>
            <TextField label="address" value={address} onChange={e => setAddress(e.target.value)} classes={{root: classes.field}}/>
            <br/>
            <Button disabled={!(name && surname)} type="submit" color="primary" variant="contained" classes={{root: classes.submit}}>Send Form</Button>
        </form>
    )
}

export default Form;