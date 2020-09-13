import { createStore } from 'vuex';
import { UserModule } from "./User";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    User: UserModule
  }
})
