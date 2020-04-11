import React from 'react';
import { AppBar, Toolbar, Typography, Theme, makeStyles, createStyles } from '@material-ui/core';

const TopBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          財務自由計算機
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme: Theme) => createStyles({
  title: {
    flexGrow: 1,
  },
}),
);

export default TopBar;
