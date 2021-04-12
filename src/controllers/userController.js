export const userController = {
  methods: {
    hasPermissionPage (pagePermission) {
      return this.$q.sessionStorage.getItem('permissions').some(page => page === pagePermission)
    }
  }
}
