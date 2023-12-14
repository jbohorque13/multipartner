import React from 'react';
import { useStepper } from './StepperContext';

const Name = () => {
  const { updateFormData, formData } = useStepper();

  return (
    <input
      value={formData?.name}
      type="text"
      placeholder="name"
      onChange={(e) => updateFormData({ name: e.target.value })}
    />
  );
};

const LastName = () => {
  const { updateFormData, formData } = useStepper();

  return (
    <input
      value={formData?.lastName}
      type="text"
      placeholder="lastName"
      onChange={(e) => updateFormData({ lastName: e.target.value })}
    />
  );
};

const Phone = () => {
  const { updateFormData, formData } = useStepper();

  return (
    <input
      value={formData?.phone}
      type="text"
      placeholder="phone"
      onChange={(e) => updateFormData({ phone: e.target.value })}
    />
  );
};

enum Entities {
  comafi = 'banco-comafi',
  galicia = 'banco-galicia',
  sol = 'banco-sol',
}

const Hobbies = () => {
  const { updateFormData, formData } = useStepper();

  const handleHobbyChange = (hobby: string) => {
    updateFormData({ hobby });
  };

  return (
    <div style={{ display: 'flex', columnGap: '12px' }}>
      <label>
        <input
          type="radio"
          name="hobby"
          value={Entities.comafi}
          checked={formData.hobby === Entities.comafi}
          onChange={(e) => handleHobbyChange(e.target.value)}
        />
        Banco Comafi
      </label>
      <label>
        <input
          type="radio"
          name="hobby"
          value={Entities.galicia}
          checked={formData.hobby === Entities.galicia}
          onChange={(e) => handleHobbyChange(e.target.value)}
        />
        Banco galicia
      </label>
      <label>
        <input
          type="radio"
          name="hobby"
          value={Entities.sol}
          checked={formData.hobby === Entities.sol}
          onChange={(e) => handleHobbyChange(e.target.value)}
        />
        Banco del sol
      </label>
    </div>
  );
};

/* const Flow = () => {
  const { formData } = useStepper();

  // llamada a la api que trae los pasos de la entidad

  // comafi [{ key: 'simulation', newStep: 'validation' }] --> validar monto mayor a 3000
  // galicia [{ key: 'simulation', newStep: 'validation' }] --> validar monto mayor a 5000

  const flows: { [key: number]: () => React.JSX.Element } = {
    [Entities.comafi]: () => <p>Componente base</p>,
    [Entities.galicia]: () => (
      <div>
        <p>Componente base</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quia ipsa
          quis dolore beatae a dolores labore dolorum cum? Nulla enim ipsam
          magni numquam sapiente placeat, rerum nihil vel. Reprehenderit!
        </p>
      </div>
    ),
    [Entities.sol]: () => <p>Componente base</p>,
  };

  const FlowComponent = flows[formData.hobby];

  return <FlowComponent />;
}; */

export const NewOrderSteps = {
  'orders': {
    components: {
      0: {
        component: <Name />,
        step: 1,
        nextStep: 1,
        prevStep: 0,
      },
      1: {
        component: <LastName />,
        step: 2,
        nextStep: 2,
        prevStep: 0,
      },
      2: {
        component: <Phone />,
        step: 3,
        nextStep: 3,
        prevStep: 1,
      },
      3: {
        component: <Hobbies />,
        step: 4,
        nextStep: 4,
        prevStep: 2,
      },
    }
  },
  'banco-comafi': {
    components: {
      4: { 
        component: <div>Banco Comafi Step 1</div>,
        step: 1,
        nextStep: 5,
        prevStep: 3,
      },
      5: {
        component: <div> Banco Comafi Step 2</div>,
        step: 2,
        nextStep: 5,
        prevStep: 4,
      }
    },
    
  },
  'banco-galicia': {
    components: {
      4: { 
        component: <div>Banco Galicia step 1</div>,
        step: 1,
        nextStep: 5,
        prevStep: 3,
      },
      5: {
        component: <div> Banco Galicia step 2 </div>,
        step: 2,
        nextStep: 5,
        prevStep: 4,
      }
    },
  },
  'banco-sol': {
    components: {
      4: { 
        component: <div>Banco Sol step 1</div>,
        step: 1,
        nextStep: 5,
        prevStep: 3,
      },
      5: {
        component: <div> Banco Sol step 2 </div>,
        step: 2,
        nextStep: 6,
        prevStep: 4,
      },
      6: {
        component: <div> Banco Sol step 3 </div>,
        step: 3,
        nextStep: 6,
        prevStep: 5,
      }
    },
  },
};

// simulamos llamada

// ['farmer_name']

// export const NewOrderSteps = {
//   farmer_name: {
//     component: () => <Name />,
//   },
//   farmer_last_name: {
//     component: () => <LastName />,
//   },
//   farmer_phone: {
//     step: 3,
//     component: () => <Phone />,
//   },
//   farmer_hobbies: {
//     step: 4,
//     component: () => <Hobbies />,
//   },
//   entity_flow: {
//     step: 5,
//     component: () => <Flow />,
//   },
// };
