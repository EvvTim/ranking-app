import { useEffect, useState } from 'react';
import socket from '../socket';
// import players from '../data/players';

const useData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('http://localhost:9999');
  //     const json = await response.json();
  //     setData(json);
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    socket.on('score', (score) => {
      setData(score);
      setLoading(false);
    });
  }, []);

  console.log(data);

  return { data, loading };
};

export default useData;
