const a = {
  namespaced: true,
  state: () => ({
    address: "jogja",
  }),
  mutations: {
    addressUp(state) {
      state.address = "purworejo";
    },
  },
};

export default a;
