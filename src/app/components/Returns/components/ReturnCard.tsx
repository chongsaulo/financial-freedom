import React from 'react';
import { Grid, Card, CardContent, Typography, makeStyles } from '@material-ui/core';

const ReturnCard = ({
  year,
  yearlyInput,
  yearlyProfit,
  revenue,
  deflatedYearlyProfit,
  deflatedRevenue,
  monthlyInput,
}) => {

  const classes = useStyles();

  return (
    <Grid item={true} xs={12} sm={6} md={3}>
      <Card className={classes.root}>
        <CardContent>
          <div className={classes.gutterBottom}>
            <Typography style={{ fontSize: 12 }} color="textSecondary" gutterBottom>
              第 {year} 年
          </Typography>
            <Typography style={{ fontSize: 14 }} variant="h6" component="h2">
              本利和：${revenue}
            </Typography>
            <Typography style={{ fontSize: 12 }} variant="body1" component="h2">
              (相等於今日嘅：${deflatedRevenue})
          </Typography>
          </div>

          <div className={classes.gutterBottom}>
            <Typography style={{ fontSize: 14 }} color="textSecondary">
              全年利潤：${yearlyProfit}
            </Typography>
            <Typography style={{ fontSize: 12 }} color="textSecondary">
              (相等於今日嘅：${deflatedYearlyProfit})
          </Typography>
          </div>

          <div className={classes.gutterBottom}>
            <Typography style={{ fontSize: 14 }} variant="body2" component="div">
              每月投入：${monthlyInput}
            </Typography>
            <Typography style={{ fontSize: 12 }} variant="body2" component="div">
              全年投入：${yearlyInput}
            </Typography>
          </div>

        </CardContent>
      </Card>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(0.5),
  },
  gutterBottom: {
    marginBottom: theme.spacing(1),
  },
}));

export default ReturnCard;
