<template>
  <div class="my-options-container">
    <select v-model="mySelectedOptions" v-on:change="onChange($event, mySelectedOptions)">
      <option disabled value="">Please select</option>
      <option v-for="option in optionList" v-bind:value="option">
        {{ option.value}}
      </option>
    </select>
    <router-link to="/add-option">Add New Item</router-link>
    <router-link to="/">Cancel</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import myDataService from '@/services/myDataService'
  export default {
    name: 'my-options',
    data () {
      return {
        optionList: myDataService.getOptions(),
        mySelectedOptions: []
      }
    },
    methods: {
      onChange: function (event, payload) {
        console.log('OnChange: ', event, payload)
        this.$emit('on-change-items', { options: payload })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .my-options-container {
    color:blue;
    float: left;
    margin: 30px;

    a {
      font-size: 12px;
      color: green;
    }
  }
</style>
