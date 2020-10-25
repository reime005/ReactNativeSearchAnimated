import { config } from '../config/config';

export const searchProducts = (term: string, mock = false) => {
  if (mock) {
    return new Promise(res => {
      setTimeout(() => {
        res(require('../../espressoMockData.json'))
      }, 300);
    })
  }

  return fetch(
    `${config.apiBaseURL}/search.pl?search_terms=${encodeURIComponent(
      term.trim(),
    )}&search_simple=1&action=process&json=1`,
    {
      headers: { ...config.userAgent },
    },
  ).then((r) => r.json());
};
