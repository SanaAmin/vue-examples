<template>
  <div id="app">
    <div>Goal of this demo: tbd</div>
    <items></items>
    <!--<router-view/>-->
  </div>
</template>

<script>
  import Items from '@/components/Items'

  export default {
    name: 'app',
    components: {
      'items': Items
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
