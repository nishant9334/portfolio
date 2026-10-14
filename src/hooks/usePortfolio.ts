import data from '../data/portfolio.json';
import type { Portfolio } from '../types/portfolio';

// Single access point for all content. Components never hardcode copy.
export function usePortfolio(): Portfolio {
  return data as Portfolio;
}
