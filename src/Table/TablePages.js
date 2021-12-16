import React, { useEffect } from 'react';
import uniqid from 'uniqid';

const TablePages = ({ rage, setPage, page, tableRows }) => {
  useEffect(() => {
    if (tableRows.length < 1 && page !== 1) {
      setPage(page - 1);
    }
    console.log('length', tableRows.length);
  }, [page, tableRows, setPage]);
  return (
    <div>
      {rage.map((el) => (
        <button key={uniqid()} onClick={() => setPage(el)} type="button">
          {el}
        </button>
      ))}
    </div>
  );
};

export default TablePages;
