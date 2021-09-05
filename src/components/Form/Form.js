import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@material-ui/core';
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

const Form = ({ title, onSubmit }) => {
    const classes = useStyles()
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [surnameError, setSurnameError] = useState(false)
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
    const handleEmail = (e) => {
        const re = /\S+@\S+\.\S+/
        setEmail(e.target.value)
        if (!re.test(e.target.value)){
            setEmailError(true)
        } else {
            setEmailError(false)
        }
    }
    const validateName = (name) => {
        const regex = /^[a-zA-Z]*$/g;
        return regex.test(name)
    } 
    const handleName = (e) => {
        setName(e.target.value)
        if (!validateName(e.target.value)) {
            setNameError(true)
        } else {
            setNameError(false)
        }
    }
    const handleSurname = (e) => {
        setSurname(e.target.value)
        if (validateName(e.target.value)) {
            setSurnameError(false)
        } else {
            setSurnameError(true)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (typeof onSubmit === 'function') {
            onSubmit()
        }
        const id = storedValue[storedValue.length - 1]?.id + 1;
        if (name && surname && !emailError && email) {
            setValue([...storedValue, { id, name, surname, email, address, level, description }])
        }
        clearForm()
    }
    return (
        <Grid container component="form" onSubmit={(e) => handleSubmit(e)} className={classes.root}>
            <Typography>{title}</Typography>
            <br />
            <TextField required label="name" error={nameError} autoComplete="new-password" value={name} onChange={handleName} classes={{ root: classes.field }} />
            <TextField required label="surname" error={surnameError} autoComplete="new-password" value={surname} onChange={handleSurname} classes={{ root: classes.field }} />
            <TextField label="email" required error={emailError} autoComplete="new-password" value={email} onChange={handleEmail} classes={{ root: classes.field }} />
            <TextField label="address" autoComplete="new-password" value={address} onChange={e => setAddress(e.target.value)} classes={{ root: classes.field }} />
            <TextField label="level" autoComplete="new-password"type="number" value={level} onChange={e => setLevel(e.target.value)} classes={{ root: classes.field }} />
            <TextField label="description" autoComplete="new-password" value={description} onChange={e => setDescription(e.target.value)} classes={{ root: classes.field }} />
            <br />
            <Button disabled={!(name && surname && !emailError && email && !nameError && !surnameError)} type="submit" color="primary" variant="contained" classes={{ root: classes.submit }}>Send Form</Button>
        </Grid>
    )
}

export default Form;