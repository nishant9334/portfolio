import { useMemo } from 'react';
import portfolioData from '../data/portfolio.json';
import type { PortfolioData } from '../types/portfolio';

export function usePortfolio(): PortfolioData {
  const data = useMemo(() => portfolioData as PortfolioData, []);
  return data;
}
