import React, { createContext, useContext, useState, ReactNode } from 'react';

interface StepperContextProps {
  currentStep: number;
  stepsLength: number;
  formData: Record<string, any>;
  updateFormData: (data: Record<string, any>) => void;
  nextStep: (arg: number) => void;
  prevStep: (arg: number) => void;
}

const StepperContext = createContext<StepperContextProps | undefined>(
  undefined
);

interface StepperProviderProps {
  children: ReactNode;
  stepsLength: number;
}

const StepperProvider: React.FC<StepperProviderProps> = ({
  children,
  stepsLength,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(5);
  const [allSteps, setAllSteps] = useState(stepsLength); // no lo estamos usando por ahora.
  const [formData, setFormData] = useState<Record<string, any>>({});

  const updateFormData = (data: Record<string, any>) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  const nextStep = (arg: number) => {
    console.log('next ', arg);
    setCurrentStep(arg);
  }

  const prevStep = (arg: number) => {
    console.log('args ', arg);
    setCurrentStep(Math.max(arg - 1, 1));
  }

  const contextValue: StepperContextProps = {
    currentStep,
    formData,
    stepsLength: allSteps,
    updateFormData,
    nextStep,
    prevStep,
  };

  return (
    <StepperContext.Provider value={contextValue}>
      {children}
    </StepperContext.Provider>
  );
};

const useStepper = () => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error('useStepper must be used within a StepperProvider');
  }
  return context;
};

export { StepperProvider, useStepper };
