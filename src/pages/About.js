import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(()=>({
  root: {
    padding: '32px',
  }
}))

const About = () => {
  const classes = useStyles();
  return (
    <Grid container classes={{root: classes.root}}>
      <Typography variant="h3">About</Typography>
      <Grid item xs={12}>
        <Typography>
          This is a single page app for testing purposes only.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default About;