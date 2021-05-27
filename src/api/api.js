import { uri } from "./config.js";
import axios from 'axios';

export const get_squad = () => axios.get(`${uri}/players`).then((res) => res.data);
export const get_matches = () => axios.get(`${uri}/matches`).then((res) => res.data);
export const get_teams = () => axios.get(`${uri}/teams`).then((res) => res.data);
export const get_news = () => axios.get(`${uri}/news`).then((res) => res.data);
export const get_transfers = () => axios.get(`${uri}/transfers`).then((res) => res.data);
