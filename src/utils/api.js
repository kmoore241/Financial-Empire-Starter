// src/utils/api.js
// Placeholder API utility functions

const ALPHA_VANTAGE_KEY = import.meta.env.VITE_ALPHA_VANTAGE_KEY;
const SENTIMENT_API_URL = 'https://api.alternative.me/fng/';

export async function fetchOHLC(symbol, interval = '1d') {
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_${interval.toUpperCase()}&symbol=${symbol}&apikey=${ALPHA_VANTAGE_KEY}`;
  const res = await fetch(url);
  return res.json();
}

export async function fetchIndicator(symbol, indicator, interval = '1d') {
  const url = `https://www.alphavantage.co/query?function=${indicator.toUpperCase()}&symbol=${symbol}&interval=${interval}&apikey=${ALPHA_VANTAGE_KEY}`;
  const res = await fetch(url);
  return res.json();
}

export async function fetchFearGreed() {
  const res = await fetch(SENTIMENT_API_URL);
  const data = await res.json();
  return data.data?.[0] || {};
}
