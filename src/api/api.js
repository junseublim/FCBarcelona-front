import axios from 'axios'

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/' : 'http://13.125.64.124'

const API = {
  getSquad: () => axios.get('/players').then((res) => res.data),
  getMatches: () => axios.get('/matches').then((res) => res.data),
  getTeams: () => axios.get('/teams').then((res) => res.data),
  getNews: () => axios.get('/news').then((res) => res.data),
  getTransfers: () => axios.get('/transfers').then((res) => res.data)
}

export default API
