export const notifies = {
  methods: {
    showNotify (info) {
      this.$q.notify({
        message: info.message,
        icon: info.icon,
        color: info.color
      })
    },
    dialogConfirm (info) {
      this.$q.dialog({
        title: info.title,
        message: info.message,
        cancel: true,
        persistent: true
      }).onOk(() => {
        console.log('Ok')
      })
    }
  }
}
