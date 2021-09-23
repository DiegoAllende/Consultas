export const formuGroup = (initialformu) => {
  let auxVlues = {};
  let auxError = {};
  let auxTouch = {};
  let auxValid = {};
  for (const key in initialformu) {
    auxVlues[key] = initialformu[key][0];
    auxError[key] = '';
    auxTouch[key] = false;
  }

  for (const key in initialformu) {
    if(initialformu[key][1]){
      initialformu[key][1].forEach(item => {
        auxValid[key] = {...auxValid[key], [item]: true};
      });
    }
  }

  const resultFormu = {
    values: {...auxVlues},
    validations: {...auxValid},
    errors: {...auxError},
    touched: {...auxTouch},
    valid: false
  };

  return resultFormu;
}

export const validators = {
  requerid: 'requerid',
  maxLength: 'maxLength'
}