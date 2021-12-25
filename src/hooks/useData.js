import { useEffect, useState } from 'react';
import socket from '../socket';
import addPosition from '../Table/addPosition';

const useData = () => {
  const [data, setData] = useState([]);
  const updatedData = addPosition(data);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:9999');
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const updateData = (newPlayerData) => {
      setData((prevData) => {
        const newData = [...prevData];
        const index = newData.findIndex((player) => player.id === newPlayerData.id);
        if (index !== -1) {
          newData[index] = newPlayerData;
        } else {
          newData.push(newPlayerData);
        }
        return newData;
      });
    };
    socket.on('newData', updateData);
  }, []);

  return updatedData;
};

export default useData;
