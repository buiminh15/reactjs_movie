const mergeArrays = (datasA, datasB) => {
  const result = [];
  if (datasA?.length && datasB?.length) {
    for (const [i, data] of datasA.entries()) {
      result.push({ ...data, ...datasB[i] });
    }
  }

  return result;
};

const resizeImage = () => {
  
}

export { mergeArrays };
