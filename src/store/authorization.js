export default {
  namespaced: true,
  state: {
    userName: null,
    userToken: null,
  },
  getters: {
    userName: (state) => state.userName || '',
  },
  mutations: {
    setAuthorization(state, { userName, userToken }) {
      state.userName = userName;
      state.userToken = userToken;
      localStorage.setItem('userName', userName);
      localStorage.setItem('userToken', userToken);
    },
  },
  actions: {
    async authorization({ rootState, commit }, { userName, userPassword }) {
      const { apiRS } = rootState;
      const userToken = await apiRS.authorization(userName, userPassword);
      if (userToken) {
        apiRS.setHeaderToken(userToken);
        commit('setAuthorization', {
          userName,
          userToken,
        });
        return true;
      }
      return false;
    },

    hasAuthorization({ rootState, commit }) {
      const userName = localStorage.getItem('userName');
      const userToken = localStorage.getItem('userToken');
      if (!userName || !userToken) return false;
      const { apiRS } = rootState;
      if (!apiRS.hasToken()) {
        apiRS.setHeaderToken(userToken);
      }
      commit('setAuthorization', {
        userName,
        userToken,
      });
      return true;
    },

    logout() {
      delete localStorage.userToken;
      delete localStorage.userName;
    },
  },
};
