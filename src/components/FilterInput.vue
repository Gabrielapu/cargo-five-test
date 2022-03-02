<template>
  <b-input-group class="mb-3">
    <b-input-group-prepend is-text>
      <b-icon icon="search"></b-icon>
    </b-input-group-prepend>
    <b-form-input
      type="search"
      placeholder="Puedes filtrar por nombre, país, continente o coordenadas"
      @input="$emit('input', $event)"
    ></b-form-input>
  </b-input-group>
</template>

<script>
export default {
  name: 'FilterInput'
}
</script>
