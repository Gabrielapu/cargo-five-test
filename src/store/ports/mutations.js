const mutations = {
  'SET_PORTS'(state, ports) {
    state.ports = ports
  },
  'SET_META'(state, meta) {
    state.meta = meta
  },
  'SET_LOADING'(state, value) {
    state.loading = value
  }
}

export default mutations