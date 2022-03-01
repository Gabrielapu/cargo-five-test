import * as actions from './actions'
import mutations from './mutations'
import * as getters from './getters'

const Ports = {
  namespaced: true,
  state: {
    ports: [],
    links: {},
    meta: {}
  },
  getters,
  mutations,
  actions
}

export default Ports