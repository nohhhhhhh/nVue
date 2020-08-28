import SockJS from 'sockjs-client';
import Stomp from 'webstomp-client';

export const connWebsocket = (obj) => {
  console.log('::::::connWebsocket:::::::')
  console.log(obj[0].socketConnect + '::')
  console.log('Starting connection to WebSocket Server')
  obj[0].socketConnect = new WebSocket('ws://172.27.44.182:3030/')
  console.log(obj[0].socketConnect + 'ㄴㄴㄴ::')
  obj[0].socketConnect.onopen = function (evt) { console.log(evt) }
  obj[0].socketConnect.onclose = function (evt) { console.log(evt) }
  obj[0].socketConnect.onmessage = function (evt) { console.log(evt) }
  obj[0].socketConnect.onerror = function (evt) { console.log(evt) }
}

/*
|--------------------------------------------------------------------------
| CONNECT SOCKET BY SOCKJS, STOMP
|--------------------------------------------------------------------------
*/
export const connSockJs = (obj, callBackFn) => {
  let socketUrl = obj[0].socketUrl
  let socketConnect = new SockJS(socketUrl)
  obj[0].socketConnect = Stomp.over(socketConnect)
  obj[0].socketConnect.debug = () => {
    console.log('=====debug====')
  }
  obj[0].socketConnect.connect({},
    frame => {
      obj[0].socketConnect.subscribe('/weight/MonitoringNB12', tick => {
        console.log(JSON.parse(tick.body))
        callBackFn(JSON.parse(tick.body))
      })
    },
    error => {
      console.log(error)
      this.SecondConnected = false
    }
  )
}
