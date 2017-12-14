<template>
  <div class="add-option-container">
    <form>
      <input type="text" v-model="optionName" placeholder="Enter option" />
      <button v-on:click="addOption">Add</button>
    </form>
  </div>
</template>

<script>
  import myDataService from '@/services/myDataService'
    export default {
        name: 'add-option',
        data () {
          return {
            optionName: ''
          }
        },
        methods: {
          addOption: function (event) {
            console.log(event, this.optionName)
            myDataService.setOption(this.optionName)
          }
        }
    }
</script>

<style lang="scss" scoped>
  .add-option-container {
    display: inline-block;
  }
</style>
