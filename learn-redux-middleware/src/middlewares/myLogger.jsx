const myLogger = (store) => (next) => (action) => {
  console.log(action, "action");
  console.log("\t Prev", store.getState());
  const result = next(action);
  console.log("\t next", store.getState());
  return result;
};

export default myLogger;
