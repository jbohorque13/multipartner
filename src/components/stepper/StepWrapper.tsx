import React from 'react';
import { useStepper } from './StepperContext';
import styles from '@/styles/Home.module.css';

const StepWrapper = ({ stepsComponents, title }) => {
  const { currentStep, nextStep, prevStep, formData, stepsLength } = useStepper();

  const render = React.useMemo(() => {
    return stepsComponents[formData.hobby].components[currentStep].component
  }, [currentStep]);

  const handleNext = React.useCallback(() => {
    nextStep(stepsComponents[formData.hobby].components[currentStep].nextStep);
  }, [currentStep]);

  const handlePrev = React.useCallback(() => {
    prevStep(stepsComponents[formData.hobby].components[currentStep].prevStep);
  }, [currentStep]);

  return (
    <div>
      <h3>{title}</h3>
      <p>
        {/* Paso {CurrentComponent && CurrentComponent.step || components && components.length } de {stepsLength} */}
      </p>
      {render}
      

      <div className={styles.footer}>
        <button onClick={handlePrev}>Volver</button>
        <button onClick={handleNext}>Continuar</button>
      </div>
    </div> 
  );
};

export default StepWrapper;
