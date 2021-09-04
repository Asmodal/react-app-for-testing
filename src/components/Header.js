import React from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { makeStyles} from '@material-ui/styles';
import { Link } from 'react-router-dom';

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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: '2rem',
        fontWeight: '200',
    },
    icon: {
        color: theme.palette.success.main
    },
    navigation: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        '& > *':{
            padding: '10px'
        }
    }
}))

const Header = () => {
    const classes = useStyles();
    return (
    <Grid container classes={{root: classes.root}} boxShadow={2}>
        <Grid item xs={12} classes={{root: classes.container}}>
        <AssignmentTurnedInIcon className={classes.icon} />
        <Box mr={1} />
        <Typography variant="h1" color="primary" classes={{root: classes.title}}>
           The Testing Page
        </Typography>
        
        </Grid>
        
 
        <Grid item xs={12}>
        <nav className={classes.navigation}>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/about">About</Link>
        </nav>
        </Grid>
    </Grid>
    )
}

export default Header;