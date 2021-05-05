export const formController = {
  methods: {
    editForm () {
      if (window.info) {
        this.inputModels = window.info
        delete window.info
      } else {
        this.initModels()
      }
    },
    sendData () {
      this.$emit('submit', this.inputModels)
    },
    show () {
      console.log(this.inputModels)
    },
    initModels () {
      this.listInputLeft.forEach(input => {
        if (input.type === 'check') {
          this.$set(this.inputModels, input.field, (input.checks) ? [''] : false)
        }
      })
      this.listInputLeft.forEach(input => {
        if (input.type === 'check') {
          this.$set(this.inputModels, input.field, [''])
        }
      })
    }
  }
}
