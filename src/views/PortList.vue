<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  created() {
    this.getPorts()
  },
  computed: {
    ...mapGetters('Ports', ['ports', 'links', 'meta'])
  },
  methods: {
    ...mapActions('Ports', ['getPorts'])
  }
}
</script>
