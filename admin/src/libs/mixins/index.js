import Vue from 'vue'
import http from './../http/axios'

Vue.mixin({
  computed: {
    uploadUrl() {
      return http.defaults.baseURL + '/uploads'
    }
  },
  methods: {
    getAuthHeaders() {
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    },
  }
})