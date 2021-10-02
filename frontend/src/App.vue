<template>
  <div id="app">
    <pagum msg="Sobre o profissional"/>
  </div>
</template>

<script>
import pagum from './components/pagum.vue'

export default {
  name: 'App',
  components: {
    pagum
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&display=swap');
#app {
  font-family: 'Comfortaa', cursive;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 30px;
}
</style>
