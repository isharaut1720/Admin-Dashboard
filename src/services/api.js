import data from "../data/data.json";

export const getStats = () =>
  Promise.resolve({ data: data.stats });

export const getChartData = () =>
  Promise.resolve({ data: data.chartData });

export const getUsers = () =>
  Promise.resolve({ data: data.users });