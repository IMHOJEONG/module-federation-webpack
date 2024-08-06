const fakeAuth = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("1234"), 250);
  });
};
