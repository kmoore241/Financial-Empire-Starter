// src/hooks/useChartData.js
import { useState, useEffect } from 'react';
import { fetchOHLC, fetchIndicator } from '../utils/api';

/**
 * Fetch chart data and indicators for a given symbol
 */
const useChartData = (symbol, indicators = [], interval = '1d') => {
  const [ohlcData, setOhlcData] = useState([]);
  const [indicatorData, setIndicatorData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      setLoading(true);
      const ohlc = await fetchOHLC(symbol, interval);
      const indData = {};
      for (let ind of indicators) {
        indData[ind] = await fetchIndicator(symbol, ind, interval);
      }
      if (isMounted) {
        setOhlcData(ohlc);
        setIndicatorData(indData);
        setLoading(false);
      }
    };
    load();
    return () => { isMounted = false; };
  }, [symbol, indicators, interval]);
  return { ohlcData, indicatorData, loading };
};
export default useChartData;
