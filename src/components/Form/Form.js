import React, { useState } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import useLocalStorage from '../../hooks/useLocalStorage';
import staticUsers from '../../data/staticUsers.js';

const useStyles = makeStyles(() => ({
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
    const [level, setLevel] = useState(0)
    const [description, setDescription] = useState('')
    const [storedValue, setValue] = useLocalStorage("users", staticUsers);
    const clearForm = () => {
        setName('')
        setSurname('')
        setEmail('')
        setAddress('')
        setLevel(0)
        setDescription('')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const id = storedValue[storedValue.length - 1]?.id + 1;
        if (name && surname) {
            setValue([...storedValue, { id, name, surname, email, address, level, description }])
        }
        clearForm()
    }
    return (
        <Grid container component="form" onSubmit={(e) => handleSubmit(e)} className={classes.root}>
            <span>{title}{' '}</span>
            <br />
            <TextField required label="name" autoComplete="new-password" value={name} onChange={e => setName(e.target.value)} classes={{ root: classes.field }} />
            <TextField required label="surname" autoComplete="new-password" value={surname} onChange={e => setSurname(e.target.value)} classes={{ root: classes.field }} />
            <TextField label="email" autoComplete="new-password" value={email} onChange={e => setEmail(e.target.value)} classes={{ root: classes.field }} />
            <TextField label="address" autoComplete="new-password" value={address} onChange={e => setAddress(e.target.value)} classes={{ root: classes.field }} />
            <TextField label="level" autoComplete="new-password"type="number" value={level} onChange={e => setLevel(e.target.value)} classes={{ root: classes.field }} />
            <TextField label="description" autoComplete="new-password" value={description} onChange={e => setDescription(e.target.value)} classes={{ root: classes.field }} />
            <br />
            <Button disabled={!(name && surname)} type="submit" color="primary" variant="contained" classes={{ root: classes.submit }}>Send Form</Button>
        </Grid>
    )
}

export default Form;