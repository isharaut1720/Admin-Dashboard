import axios from "axios";

const API = "http://localhost:5000";

export const getStats = () => axios.get(`${API}/stats`);
export const getChartData = () => axios.get(`${API}/chartData`);
export const getUsers = () => axios.get(`${API}/users`);