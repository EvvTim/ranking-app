import { useEffect, useState } from 'react';
import players from '../data/players';

const useData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(players);
        setLoading(false);
      } catch (err) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
};

export default useData;
