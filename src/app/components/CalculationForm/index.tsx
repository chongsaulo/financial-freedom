import React from 'react';
import { Grid } from '@material-ui/core';
import Field from './components/Field';



const CalculationForm = ({ fields }) => {
  return (
    <Grid container={true} spacing={1}>
      {fields.map((props, key) => (
        <Field key={key} {...props} />
      ))}
    </Grid>
  );
};

export default CalculationForm;
