import Vue from 'vue'
import Main from './message.vue'
import Message from '..';

let MessageConstructor = Vue.extend(Main)
let instance
let instances = []
let seed = 1
let typeList = [
  'success', 'warning', 'info', 'error'
]

const showMessage= function(options) { // 这里的options用户定义的message样式选项
  var options = options || {};

  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  let userOnClose = options.onClose
  let id = 'message_' + seed++
  
  options.onClose = function() {
    showMessage.close(id, userOnClose)
  }
  instance = new MessageConstructor({
    data: options
  })
  
  instance.id = id
  instance.vm = instance.$mount() // 实例化vue,但未挂载
  document.body.appendChild(instance.vm.$el) // 通过原生的DOM API,append挂载到
  instance.vm.visible = true
  instance.dom = instance.vm.$el
  console.log(this)
   //控制台输出1，再输出2
  instance.dom.style.zIndex = 10000 
  console.log(this)
  instances.push(instance)
  return instance.vm
}

typeList.forEach(type => {
  showMessage[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
      options.type = type
      return showMessage(options)
    }
  }
})

showMessage.close = function(id, userOnClose) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if ( id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i])
      }
      instances.splice(i, 1)
      break
    }
  }
}

showMessage.closeAll = function () {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close()
  }
}


export default showMessage