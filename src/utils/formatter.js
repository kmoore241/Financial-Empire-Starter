// src/utils/formatter.js
// Helper functions for formatting dates, numbers, and currencies

/**
 * Format a date string or Date object into 'MMM DD, YYYY' format.
 * @param {string|Date} date
 * @returns {string}
 */
export function formatDate(date) {
  const d = new Date(date);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return d.toLocaleDateString(undefined, options);
}

/**
 * Format a number into a currency string with currency symbol.
 * @param {number} amount
 * @param {string} currency
 * @returns {string}
 */
export function formatCurrency(amount, currency = 'USD') {
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * Format a number with commas as thousands separators.
 * @param {number} number
 * @returns {string}
 */
export function formatNumber(number) {
  return number.toLocaleString();
}
