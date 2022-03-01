<template>
  <div class="container text-center">
    <b-img
      class="mb-5"
      fluid
      alt="cargofive"
      src="../assets/cargoFiveLogo.png"
    >
    </b-img>
    <h3 class=""> Puertos marítimos</h3>
    <b-input-group size="sm" class="mb-3">
      <b-input-group-prepend is-text>
        <b-icon icon="search"></b-icon>
      </b-input-group-prepend>
      <b-form-input
        v-model="filter"
        type="search"
        placeholder="Puedes filtrar por nombre, país, continente o coordenadas"
      ></b-form-input>
    </b-input-group>
    <b-table
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      responsive
      sticky-header="700px"
      head-variant="light"
      :items="items"
      :fields="fields"
      primary-key="id"
      striped
      :busy="loading"
      sort-icon-left
    >
      <template #table-busy>
        <div class="text-center text-primary my-2">
          <b-spinner class="align-middle mr-1"></b-spinner>
          <strong>Cargando...</strong>
        </div>
      </template>

      <template #cell(coordinates)="{ item }">
        <div
          @click="seeOnMap(item.coordinates)"
          class="cursor-pointer coordinates"
          v-b-tooltip="'Haz click para ver en el mapa'"
        >
          {{item.coordinates}}
        </div>
      </template>
    </b-table>

    <b-pagination
      v-model="currentPage"
      :total-rows="meta.total"
      pills
      align="center"
      :per-page="perPage"
      limit="10"
      size="sm"
      class="my-0"
      first-text="Primera"
      prev-text="Anterior"
      next-text="Siguiente"
      last-text="Última"
    ></b-pagination>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import continents from '@/mixins/continents'
export default {
  name: 'Home',
  mixins: [continents],
  data() {
    return {
      loading: false,
      filter: '',
      currentPage: 1,
      perPage: 100,
      fields: [
        {
          key: 'name',
          label: 'Nombre',
          stickyColumn: true
        },
        {
          key: 'country',
          label: 'País'
        },
        {
          key: 'continent',
          label: 'Continente'
        },
        {
          key: 'coordinates',
          label: 'Coordenadas'
        }
      ]
    }
  },
  async created() {
    this.loading = true
    await this.getPorts()
    this.currentPage = this.meta.current_page
    this.perPage = this.meta.per_page
    this.loading = false
  },
  computed: {
    ...mapGetters('Ports', ['ports', 'links', 'meta']),
    items() {
      return this.ports.map(port => ({
        continent: this.continents[port.continent],
        coordinates: port.coordinates || 'Sin coordenadas',
        country: port.country,
        id: port.id,
        name: port.name
      }))
    }
  },
  methods: {
    ...mapActions('Ports', ['getPorts']),
    seeOnMap(coordinates) {
      const encodedCoordinates = encodeURI(coordinates)
      const url 
        = `https://www.google.com/maps/search/?api=1&query=${encodedCoordinates}`
      window.open(url, '_blank');
    }
  }
}
</script>
<style scoped>
.cursor-pointer {
  cursor: pointer;
}
.coordinates:hover {
  font-weight: bold;
}
</style>
