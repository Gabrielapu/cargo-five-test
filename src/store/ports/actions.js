import Vue from 'vue'

export const getPorts = async ({commit}, page) => {
  /* Accion para obtener los puertos. Si la página viene como parametro
  si usa una url o si no, la que esta por defecto */
  const defaultUrl = '/ports'
  const pagedUrl = `/ports?page=${page}`
  const url = page ? pagedUrl : defaultUrl
  await Vue.axios.get(url)
    .then(response => {
      commit('SET_PORTS', response.data.data)
      commit('SET_META', response.data.meta)
    })
    .catch(error => {
      console.log(error.response);
    })
}