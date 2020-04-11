import React from 'react';
import TopBar from './components/TopBar';
import SectionContainer from './components/SectionContainer';
import CalculationForm from './components/CalculationForm';
import useFinancialFreedomCalculation from '../hooks/financialFreedomCalculation';
import Returns from './components/Returns';

const App = () => {

  const calculation = useFinancialFreedomCalculation();

  const {
    fields,
    returns,
  } = calculation;

  return (
    <>
      <TopBar />
      <SectionContainer>
        <CalculationForm fields={fields} />
        <Returns returns={returns} />
      </SectionContainer>
    </>
  );
}

export default App;
