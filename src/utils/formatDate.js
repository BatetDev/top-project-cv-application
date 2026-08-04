/**
 * Formats a 'YYYY-MM' date string into 'Mon YYYY' (e.g., 'May 2024').
 * Returns an empty string for empty/missing input.
 *
 * @param {string} dateValue - Date string from a month input, e.g. '2024-05'
 * @returns {string} Formatted date, e.g. 'May 2024'
 */
export function formatDate(dateValue) {
  if (!dateValue) return '';

  const [year, month] = dateValue.split('-');
  const date = new Date(Number(year), Number(month) - 1);

  return date.toLocaleString('en-US', {
    month: 'short',
    year: 'numeric',
  });
}
