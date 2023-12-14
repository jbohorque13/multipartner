import { useStepper } from './StepperContext';
import styles from '@/styles/Home.module.css';

const StepWrapper = ({ stepsComponents, title }) => {
  const { currentStep, nextStep, prevStep, formData, stepsLength } = useStepper();

  let components = null;
  let CurrentComponent = null;

  if (/* stepsComponents[currentStep] && stepsComponents[currentStep].key === 'banco-comafi' &&  */currentStep > 4) {
    components = stepsComponents[5].components[currentStep];
  } else {
    CurrentComponent = stepsComponents[currentStep];
  }

  return (
    <div>
      <h3>{title}</h3>
      <p>
        Paso {CurrentComponent && CurrentComponent.step || components && components.length } de {stepsLength}
      </p>

      {CurrentComponent && CurrentComponent.component}
      {components && components.component}


      <div className={styles.footer}>
        <button onClick={() => prevStep(components.prevStep)}>Volver</button>
        <button onClick={() => nextStep(components.nextStep)}>Continuar</button>
      </div>
    </div> 
  );
};

export default StepWrapper;
