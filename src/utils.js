export const normalizeData = (data) => 
  data.reduce((acc, todo) => ({ ...acc, [todo.id]: todo }), {});

  // trae un nuevo arreglo separando el objeto  
export const denormalizeData = (data) => Object.values(data);

