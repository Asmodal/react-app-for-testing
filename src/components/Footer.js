import React from 'react';
import { Typography, Box } from '@material-ui/core';
import AdjustIcon from '@material-ui/icons/Adjust';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.grey[900],
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        padding: '10px'
    },
    text: {
        color: theme.palette.grey[500],
        fontSize: '.5rem'
    }
}))

const Footer = () => {
    const classes = useStyles();
    return (
        <Box classes={{ root: classes.root }} boxShadow={2}>
            <Typography variant="caption" classes={{ root: classes.text }}>
                <b>The Testing Page Copyright by RM</b> | Created over three hours with Create React App and Material UI
            </Typography>
        </Box>
    )
}

export default Footer;