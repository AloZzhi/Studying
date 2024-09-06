class Event {
  constructor() {
    this.event = {
      // 'houseSource': [reWriteFn, reWriteFn, reWriteFn],
      // 'carPlace': [buyCarPlace]
    },
    this.onceFn = []
  }

  on(type, fn) {
    if (!this.event[type]) {
      this.event[type] = []
    }
    this.event[type].push(fn)
  }

  emit(type, data) {
    this.event[type].forEach((item) => {
      item(data)
    })
  }

  off(type, fn) {
    this.event[type] = this.event[type].filter((item) => item !== fn)
  }

  once(type, fn) {
    if (this.onceFn.includes(fn)) {
      return
    }
    this.onceFn.push(fn)
    this.on(type, fn)

  }

}

const e = new Event()