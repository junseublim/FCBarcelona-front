import axios from 'axios'

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/' : 'http://13.125.64.124'

export const get_squad = () => axios.get(`/players`).then((res) => res.data)
export const get_matches = () => axios.get(`/matches`).then((res) => res.data)
export const get_teams = () => axios.get(`/teams`).then((res) => res.data)
export const get_news = () => axios.get(`/news`).then((res) => res.data)
export const get_transfers = () => axios.get(`/transfers`).then((res) => res.data)
