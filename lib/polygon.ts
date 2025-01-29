// utils/polygon.ts
import axios from 'axios';

const baseURL = 'https://api.polygon.io';

export const polygonClient = axios.create({
  baseURL,
  params: {
    apiKey: process.env.POLYGON_API_KEY
  }
});

export const getStockData = async (symbol: string) => {
  try {
    const response = await polygonClient.get(`/v2/aggs/ticker/${symbol}/prev`);
    return response.data;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    throw error;
  }
};