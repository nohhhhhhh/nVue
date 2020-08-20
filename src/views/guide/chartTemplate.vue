<template>
  <LineChart></LineChart>
</template>

<script>
export default {
  name: 'chartTemplate',
  components: {
    LineChart: () => import('../../components/chart/LineChart')
  }
}
</script>

<style scoped>

</style>
