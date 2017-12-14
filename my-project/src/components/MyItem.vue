<template>
    <div>
      <div>My todo item is <strong> {{item.value}} </strong> </div>

    </div>
</template>

<script>
    export default {
        name: 'my-item',
        props: ['item']
    }
</script>

<style scoped>

</style>
