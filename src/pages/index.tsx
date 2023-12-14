import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { NewOrderSteps } from '@/components/stepper/Steps';

import {
  StepperProvider,
  useStepper,
} from '@/components/stepper/StepperContext';
import StepWrapper from '@/components/stepper/StepWrapper';

export default function Home() {
  return (
    <>
      <Head>
        <title>Stepper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.stepper}>
        <StepperProvider stepsLength={Object.keys(NewOrderSteps).length}>
          <StepWrapper
            title="Nueva creación de orden"
            stepsComponents={NewOrderSteps}
          />
        </StepperProvider>
      </div>
    </>
  );
}
