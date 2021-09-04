import React from 'react';
import { Typography, Box } from '@material-ui/core';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { makeStyles} from '@material-ui/styles';

const useStyles = makeStyles((theme)=> ({
    root: {
        width: '100%',
        padding: '20px',
        backgroundColor: '#FFF',
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    container: {
        width: '100%',
        border: '1px solid green'
    },
    title: {
        fontSize: '2rem',
        fontWeight: '200',
    },
    icon: {
        color: theme.palette.success.main
    }
}))

const Header = () => {
    const classes = useStyles();
    return (
    <Box classes={{root: classes.root}} boxShadow={2}>
        <AssignmentTurnedInIcon className={classes.icon} />
        <Box mr={1} />
        <Typography variant="h1" color="primary" classes={{root: classes.title}}>
           The Testing Page
        </Typography>
    </Box>
    )
}

export default Header;