import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ReturnCard from './components/ReturnCard';

const Returns = ({ returns }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container={true} spacing={1}>
      {returns.map((props, key) => (
        <ReturnCard key={key} {...props} />
      ))}
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(0.5),
  },
}));

export default Returns;
