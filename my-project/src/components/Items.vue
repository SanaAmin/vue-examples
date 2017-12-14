<template>
  <div>
    <h2>{{ welcomeMessage }}</h2>
    <!-- on-change-items is an event emitted from child -->
    <my-options v-on:on-change-items="onChangeItems"></my-options>
    <div class="my-items-list">
      <my-item v-for="item in selectedItems" :key="item.key" v-bind:item="item"></my-item>
    </div>
    <a v-if="selectedItems.length" id="clear-list" v-on:click="clearItems" title="Clear List">Clear List</a>

  </div>

</template>

<script>
  import MyOptions from './MyOptions'
  import MyItem from './MyItem'

  export default {
    components: {MyOptions, MyItem},
    name: 'items',
    data: function () {
      return {
        welcomeMessage: 'My ToDo List',
        selectedItems: []
      }
    },
    methods: {
      onChangeItems: function (payload) {
        this.selectedItems = payload.options
      },
      clearItems: function () {
        this.selectedItems = []
      }
    }

  }
</script>

<style lang="scss" scoped>
  h2 {
    color: blue;
  }
  #clear-list {
    cursor: pointer;
    font-size: 10px;
    float: left;
    margin-top: 30px;
  }
  .my-items-list {
    border: 1px solid;
    margin: 30px;
    width: 400px;
    height: 300px;
    float: left;
  }
</style>
