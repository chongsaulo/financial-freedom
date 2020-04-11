import { useState } from "react";
import { range, last } from 'lodash';

const useFinancialFreedomCalculation = (initialState = {
  monthlyInput: 15000,
  inflationRate: 3,
  profitRate: 7,
  calculateNumberOfYear: 12,
}) => {
  const [monthlyInput, setMonthlyInput] = useState(initialState.monthlyInput);
  const [inflationRate, setInflationRate] = useState(initialState.inflationRate);
  const [profitRate, setProfitRate] = useState(initialState.profitRate);
  const [calculateNumberOfYear, setCalculateNumberOfYear] = useState(initialState.calculateNumberOfYear);

  const fields = [
    {
      title: '每月可投入資金',
      value: monthlyInput,
      setValue: setMonthlyInput,
      adornment: '$',
      adornmentPosition: 'start',
    },
    {
      title: '量化寬鬆印錢通脹率 (%)',
      value: inflationRate,
      setValue: setInflationRate,
      adornment: '%',
      adornmentPosition: 'end',
    },
    {
      title: '投資收益率 (%)',
      value: profitRate,
      setValue: setProfitRate,
      adornment: '%',
      adornmentPosition: 'end',
    },
    {
      title: '計算年期',
      value: calculateNumberOfYear,
      setValue: setCalculateNumberOfYear,
      adornment: '年',
      adornmentPosition: 'end',
    },
  ];

  const formatAmount = (amount: number) => Number(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

  const returns = range(calculateNumberOfYear).reduce((returns, year) => {
    const previousYear = last(returns) || {
      monthlyInput,
      revenue: 0,
    };

    const inflationProduct = Math.pow((1 + inflationRate / 100), year);
    const profitProduct = 1 + profitRate / 100;

    const inflatedMonthlyInput = monthlyInput * inflationProduct;
    const previousYearRevenue = previousYear.revenue;

    const yearlyInput = inflatedMonthlyInput * 12;
    const revenue = (previousYearRevenue + yearlyInput) * profitProduct;


    const yearlyProfit = revenue - previousYearRevenue;
    const deflatedYearlyProfit = yearlyProfit / inflationProduct;
    const deflatedRevenue = revenue / inflationProduct;

    return [
      ...returns,
      {
        ...previousYear,
        year: year + 1,
        yearlyInput,
        yearlyProfit,
        revenue,
        deflatedYearlyProfit,
        deflatedRevenue,
        monthlyInput: inflatedMonthlyInput,
      },
    ]
  }, [] as any[]).map(item => ({
    ...item,
    yearlyInput: formatAmount(item.yearlyInput),
    yearlyProfit: formatAmount(item.yearlyProfit),
    revenue: formatAmount(item.revenue),
    deflatedYearlyProfit: formatAmount(item.deflatedYearlyProfit),
    deflatedRevenue: formatAmount(item.deflatedRevenue),
    monthlyInput: formatAmount(item.monthlyInput),
  }));

  return {
    fields,
    returns,
    setMonthlyInput,
    setInflationRate,
    setProfitRate,
    setCalculateNumberOfYear,
  };


};

export default useFinancialFreedomCalculation;
