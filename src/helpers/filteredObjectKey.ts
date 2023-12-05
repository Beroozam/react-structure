export function filterUndefinedKeys(obj:{}) {
  const filteredObj = {};

  for (const key in obj) {
    if (obj[key] !== undefined) {
      filteredObj[key] = obj[key];
    }
  }

  return filteredObj;
}

export function filterUndefinedKeysSecondWay(obj:{}) {
  return Object.fromEntries(Object.entries(obj).filter(([key, value]) => value !== undefined));
}

export function filterUndefinedKeysThirdWay(obj: {}) {
  let filteredObj = {};

  for (const key in obj) {
    filteredObj = {...filteredObj , ...( (obj[key] !== undefined) && {[key]:obj[key]} )}
  }

  return filteredObj;
}
