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

/**
 * Formats a date range for CV entries.
 *
 * @param {string} dateFrom   - Start date from a month input, e.g. '2022-09'
 * @param {string} dateTo     - End date from a month input, e.g. '2025-06'
 * @param {string} fallbackTo - Text to use when dateTo is empty, e.g. 'Present'
 * @returns {string} Formatted range, e.g. 'Sep 2022 — Jun 2025'
 */
export function formatDateRange(dateFrom, dateTo, fallbackTo = 'Present') {
  const from = formatDate(dateFrom) || 'Start';
  const to = formatDate(dateTo) || fallbackTo;

  return `${from} — ${to}`;
}
