  const arr = [
    { id: 1, universe: 'marvel', name: 'Spider Man' },
    { id: 2, universe: 'marvel', name: 'Iron Man' },
    { id: 3, universe: 'dc', name: 'Aqua Man' },
    { id: 4, universe: 'dc', name: 'Bat Man' },
    { id: 5, universe: 'marvel', name: 'Hulk' },
  ];


  const res = {
    marvel: [
      { id: 1, universe: 'marvel', name: 'Spider Man' },
      { id: 2, universe: 'marvel', name: 'Iron Man' },
      { id: 5, universe: 'marvel', name: 'Hulk' },
    ],
    dc: [
      { id: 3, universe: 'dc', name: 'Aqua Man' },
      { id: 4, universe: 'dc', name: 'Bat Man' },
    ],
  };

const groupBy = (arr, key) => {
    if (!arr || !key) {
      throw new Error('One or more arguments are not defined');
    } else {
      return arr.reduce((acc, item) => {
        if (!item[key]) {
          return {};
        } else {
          return !!acc[item[key]]
            ? { ...acc, [item[key]]: [...acc[item[key]], item] }
            : { ...acc, [item[key]]: [item] };
        }
      }, {});
    }
  };