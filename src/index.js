import _ from 'lodash'
import './style/index.css'// 引入样式文件
import './style/alan.scss'
import { name } from '@/alan'
import $ from 'jquery'

function createElement () {
  const div = document.createElement('div')
  div.innerHTML = _.join(['my', ' name', 'is', 'alan'], '')
  div.className = 'box'
  return div
}
document.body.appendChild(createElement())
console.log(name)
console.log($('.box'))
