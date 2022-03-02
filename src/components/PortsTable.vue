<template>
  <b-table      
    :filter="filter"
    responsive
    sticky-header="700px"
    head-variant="light"
    :items="items"
    :fields="fields"
    primary-key="id"
    :busy="loading"
    sort-icon-left
  >
    <template #table-busy>
      <div class="text-center text-primary my-2">
        <b-spinner class="align-middle mr-1"></b-spinner>
        <strong>Navegando...</strong>
      </div>
    </template>

    <template #cell(coordinates)="{ item }">
      <div
        v-if="item.coordinates"
        @click="seeOnMap(item.coordinates)"
        class="cursor-pointer coordinates"
        v-b-tooltip="'Haz click para ver en el mapa'"
      >
        {{item.coordinates}}
      </div>
      <div v-else>
        <small>Sin coordenadas</small>
      </div>
    </template>
  </b-table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import continents from '@/mixins/continents'
export default {
  name: 'PortsTable',
  mixins: [continents],
  props: ['filter'],
  data() {
    return {
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
  computed: {
    ...mapGetters('Ports', ['ports', 'meta', 'loading']),
    items() {
      return this.ports
        .map(port => ({
          continent: this.continents[port.continent],
          coordinates: port.coordinates || null,
          country: port.country,
          id: port.id,
          name: port.name
        }))
        .sort(({ name: a }, { name: b }) => a.localeCompare(b))
    }
  },
  methods: {
    ...mapActions('Ports', ['getPorts']),
    seeOnMap(coordinates) {
      if(!coordinates) return 
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
  font-style: italic;
}
</style>