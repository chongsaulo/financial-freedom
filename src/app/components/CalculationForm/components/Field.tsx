import React from "react";
import { Grid, FormControl, InputLabel, FilledInput, InputAdornment } from "@material-ui/core";

interface IFieldProps {
  title: string;
  value: any;
  setValue: (value: any) => void;
  adornment: string;
  adornmentPosition: string;
};

const Field = ({
  title,
  value,
  setValue,
  adornment,
  adornmentPosition,
}: IFieldProps) => (
    <Grid item={true} xs={12} sm={6} md={3}>
      <FormControl
        fullWidth={true}
        variant='filled'
      >
        <InputLabel>{title}</InputLabel>
        <FilledInput
          type='number'
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
          startAdornment={adornmentPosition === 'start' ? (
            <InputAdornment position="start">
              {adornment}
            </InputAdornment>
          ) : undefined}
          endAdornment={adornmentPosition === 'end' ? (
            <InputAdornment position="end">
              {adornment}
            </InputAdornment>
          ) : undefined}
        />
      </FormControl>
    </Grid>
  );

export default Field;
