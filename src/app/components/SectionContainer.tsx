import React from 'react';
import { Container, makeStyles, Theme, createStyles } from '@material-ui/core';

const SectionContainer = ({ children }) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      {children}
    </Container>
  );
};

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    padding: theme.spacing(2),
  },
}),
);

export default SectionContainer;
