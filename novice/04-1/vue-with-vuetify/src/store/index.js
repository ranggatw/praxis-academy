import Vue from "vue";
import Vuex from "vuex";
import { user } from "../services/user";
import a from "./a";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
    count: 5,
    user: "",
  },
  mutations: {
    incr(state) {
      state.count += 1;
    },
    updateUser(state, data) {
      state.user = data;
    },
  },
  actions: {
    async getUser(context) {
      try {
        const res = await user();
        context.commit("updateUser", res.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {
    a: a,
  },
});
