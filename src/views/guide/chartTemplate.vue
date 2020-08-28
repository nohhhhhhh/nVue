<template>

  <button v-on:click="sendMessage('hello')">Send Message</button>
  <!-- <grid-layout :layout.sync="layout" :col-num="12" :row-height="30"
                :is-draggable="true"
                :is-resizable="true"
                :vertical-compact="false"
                :prevent-collision="true"
                :use-css-transforms="true"Bar
                :responsive="true"
                :prevent-colllision="true"
                @layout-created="layoutCreatedEvent">
     <grid-item v-for="(item,index) in layout" :key=index :x.sync="item.x" :y.sync="item.y" :w.sync="item.w" :h.sync="item.h" :i="item.i">
       {{item.i}}

       <br/>

       <line-chart v-if="item.type == 'lineChart'" :chart-data="item.lineChartData" :options="{responsive: true, maintainAspectRatio: false}"></line-chart>
       <bar-chart v-if="item.type == 'barChart'" :chart-data="item.lineChartData" :options="{responsive: true, maintainAspectRatio: false}"></bar-chart>

       <label v-if="item.type == 'label'">{{item.text}}</label>
       <button @click="removeGridItem(item.i)">-</button>
       <button @click="addGridItem">+</button>
       <button @click="editGridItem(item.i)">edit</button>

     </grid-item>
   </grid-layout>-->
</template>

<script>
import lineChart from '../../components/chart/LineChart'
import barChart from '../../components/chart/BarChart'
import data from '../../resources/setting'


export default {
  name: 'chartTemplate',
  components: {
    lineChart,
    barChart
  },
  data () {
    return {
      index: 0,
      layout: [],
      connection: null
    }
  },
  mounted () {
    this.created()
  },
  methods: {
    layoutCreatedEvent: function (newLayout) {
      this.layout = data
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
      this.layout.splice(item - 1, 1)
    },
    editGridItem (item) {

    },
    sendMessage: function (message) {
      console.log('Hello')
      console.log(data[0].socketConnect)
      data[0].socketConnect.send(message)
    },
    created: function () {
      this.layout = data
      console.log(this.layout[0].socketConnect + '::')

      console.log('Starting connection to WebSocket Server')
      data[0].socketConnect = new WebSocket('wss://echo.websocket.org')

      data[0].socketConnect.onmessage = function (event) {
        console.log(event)
      }

      data[0].socketConnect.onopen = function (event) {
        console.log(event)
        console.log('Successfully connected to the echo websocket server...')
      }
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
