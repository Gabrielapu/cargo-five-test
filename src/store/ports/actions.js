import Vue from 'vue'

export const getPorts = async ({commit}) => {
  await Vue.axios.get('/ports?page=2')
    .then(response => {
      commit('SET_PORTS', response.data.data)
      commit('SET_LINKS', response.data.links)
      commit('SET_META', response.data.meta)
    })
    .catch(error => {
      console.log(error.response);
    })
}