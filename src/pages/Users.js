import React, {useState} from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import staticUsers from '../data/staticUsers';
import useLocalStorage from '../hooks/useLocalStorage';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10px'
  },
  list: {
    paddingInlineStart: 0,
  },
  listItem: {
    listStyle: 'none',
    '& + *': {
      marginTop: '10px',
    },
  },
  surface: {
    background: theme.palette.grey[50],
    padding: '10px',
    display: 'flex',
    flexWrap: 'wrap',
    flex: '1 1 100%',
    '& > *': {
      borderRight: '1px solid grey',
      paddingRight: '10px',
      marginRight: '10px',
    },
    '& > *:first-child': {
      fontWeight: 700
    },
    '& > *:last-child': {
      borderRight: 'none'
    }
  },
  label: {
    display: 'block'
  }
}))
const Users = () => {
  const classes = useStyles();
  const [storedValue] = useLocalStorage("users", staticUsers);
  return (
    <Box classes={{ root: classes.root }}>
      <Typography variant="subtitle1">
        List of users
      </Typography>
      <Grid container component="ul" classes={{ root: classes.list }}>
        {storedValue.map(user => (
          <Grid item xs={12} component="li" classes={{ root: classes.listItem }}>
            <Box classes={{ root: classes.surface }} boxShadow={2} key={user.id}>
              {Object.keys(user).map(key => (<Box classes={{ root: classes.label }}>
                {user[key]}
              </Box>))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Users;
