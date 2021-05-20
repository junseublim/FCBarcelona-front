import { dev_uri } from "./config.js";
import axios from 'axios';

export const get_squad = () => axios.get(`${dev_uri}/players`).then((res) => res.data);
export const get_matches = () => axios.get(`${dev_uri}/matches`).then((res) => res.data);
export const get_teams = () => axios.get(`${dev_uri}/teams`).then((res) => res.data);
export const get_news = () => axios.get(`${dev_uri}/news`).then((res) => res.data);
export const get_transfers = () => axios.get(`${dev_uri}/transfers`).then((res) => res.data);