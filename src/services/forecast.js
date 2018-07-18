import axios from 'axios'
import { API_URL } from './constants'

export default {
  get (location) {
    return axios.get(`${API_URL}?latitude=${location.latitude}&longitude=${location.longitude}`)
  }
}
