<template>
  <div class="container text-center">
    <b-img class="mb-5" fluid src="../assets/cargoFiveLogo.png"></b-img>
    <h3 class="mb-3"> PUERTOS MARÍTIMOS</h3>
    <FilterInput @input="filter = $event" />
    <PortsTable :filter="filter"/>
    <Pagination />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Pagination from '@/components/Pagination'
import PortsTable from '@/components/PortsTable'
import FilterInput from '@/components/FilterInput'

export default {
  name: 'PortList',
  components: { Pagination, PortsTable, FilterInput },
  data() {
    return {
      filter: ''
    }
  },
  async created() {
    await this.fetchPorts()
  },
  methods: {
    ...mapActions('Ports', ['getPorts']),
    // Gattilla la accion de obtener los puertos y activa el loading
    async fetchPorts() {
      this.$store.commit('Ports/SET_LOADING', true)
      await this.getPorts()
      this.$store.commit('Ports/SET_LOADING', false)
    }
  }
}
</script>
