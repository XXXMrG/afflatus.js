module.exports = {
  mergeArray: (...args) => {
    return args.reduce((acc, val) => {
      return acc.concat(val);
    }, []);
  },
};
