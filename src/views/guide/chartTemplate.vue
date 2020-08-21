<template>
  <grid-layout :layout.sync="layout" :col-num="12" :row-height="30"
               :is-draggable="true"
               :is-resizable="true"
               :vertical-compact="false"
               :prevent-collision="true"
               :use-css-transforms="true"
               :responsive="true"
               :prevent-colllision="true"
               @layout-created="layoutCreatedEvent">
    <grid-item v-for="(item,index) in layout" :key=index :x.sync="item.x" :y.sync="item.y" :w.sync="item.w" :h.sync="item.h" :i="item.i">
      {{item.i}}
      <line-chart :chart-data="item.lineChartData" :options="{responsive: true, maintainAspectRatio: false}"></line-chart>
      <button @click="removeGridItem(item.i)">-</button>
      <button @click="addGridItem">+</button>
    </grid-item>
  </grid-layout>
</template>

<script>
import lineChart from '../../components/chart/LineChart'
import data from '../../resources/product'

export default {
  name: 'chartTemplate',
  components: {
    lineChart
  },
  data () {
    return {
      index: 0,
      layout: [
        {
          "x":0,
          "y":0,
          "w":2,
          "h":2,
          "i":"0",
          "lineChartData":{
            "datasets":[
              {
                "label":"usl",
                "backgroundColor":"transparent",
                "borderColor":"#ff9948",
                "pointRadius":0,
                "data":[
                  30,
                  20,
                  10
                ]
              }
            ]
          }
        },
        {
          "x":2,
          "y":0,
          "w":2,
          "h":4,
          "i":"1",
          "lineChartData":{
            "datasets":[
              {
                "label":"usl",
                "backgroundColor":"transparent",
                "borderColor":"#ff9948",
                "pointRadius":0,
                "data":[
                  30,
                  20,
                  10
                ]
              }
            ]
          }
        },
        {
          "x":4,
          "y":0,
          "w":2,
          "h":5,
          "i":"2",
          "lineChartData":{
            "datasets":[
              {
                "label":"usl",
                "backgroundColor":"transparent",
                "borderColor":"#ff9948",
                "pointRadius":0,
                "data":[
                  30,
                  20,
                  10
                ]
              }
            ]
          }
        },
        {
          "x":6,
          "y":0,
          "w":2,
          "h":3,
          "i":"3",
          "lineChartData":{
            "datasets":[
              {
                "label":"usl",
                "backgroundColor":"transparent",
                "borderColor":"#ff9948",
                "pointRadius":0,
                "data":[
                  30,
                  20,
                  10
                ]
              }
            ]
          }
        },
        {
          "x":8,
          "y":0,
          "w":2,
          "h":3,
          "i":"4",
          "lineChartData":{
            "datasets":[
              {
                "label":"usl",
                "backgroundColor":"transparent",
                "borderColor":"#ff9948",
                "pointRadius":0,
                "data":[
                  30,
                  20,
                  10
                ]
              }
            ]
          }
        }
      ]
    }
  },
  methods: {
    layoutCreatedEvent: function (newLayout) {
      console.log(data)
      console.log('Created layout: ', newLayout)
    },
    addGridItem () {
      this.index = this.layout.length
      let item = {x: 0, y: 0, w: 2, h: 2, i: this.index + '', whatever: 'bbb'}
      this.index++
      this.layout.push(item)
    },
    removeGridItem (item) {
      console.log(item-1);
      this.layout.splice(item - 1, 1)
    }
  }
}
</script>

<style scoped>
  .vue-grid-item {
    background: RGBA(252, 111, 39, .5);
  }

  .wrapper {
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
