class EventEmitter {
  constructor() {
    this.events = {}
  }
  on(type, fn) {
    if (this.events[type]) {
      this.events[type].push(fn)
    } else {
      this.events[type] = [fn]

    }
  }
  emit(type) {
    if(this.events[type]){
      this.events[type].forEach(fn => {
        fn()
      });
    }
  }
  off(type,fn){
    if(this.events[type]){
      this.events[type]=this.events[type].filter(item=>item!==fn)
    }
  }
}

let emitter = new EventEmitter()

emitter.on('have', () => {
  console.log('买买买1');
})

const fn = (() => {
  console.log('买买买2');
})

emitter.on('have',fn)
emitter.off('have',fn)
emitter.emit('have')