<template>
  <div>
    <b-pagination
      class="mb-0"
      v-model="currentPage"
      :total-rows="meta.total"
      pills
      align="center"
      :per-page="perPage"
      limit="10"
      first-text="Primera"
      prev-text="Anterior"
      next-text="Siguiente"
      last-text="Última"
      @change="fetchPorts"
    ></b-pagination>
    <small class="text-info">Páginas</small>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex' 

export default {
  name: 'Pagination',
  data() {
    return {
      currentPage: 1,
      perPage: 100,
    }
  },
  computed: {
    ...mapGetters('Ports', ['meta', 'loading'])
  },
  methods: {
    ...mapActions('Ports', ['getPorts']),
    async fetchPorts(page) {
      this.$store.commit('Ports/SET_LOADING', true)
      await this.getPorts(page)
      this.currentPage = this.meta.current_page
      this.perPage = this.meta.per_page
      this.$store.commit('Ports/SET_LOADING', false)
    }
  }
}
</script>
