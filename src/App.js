import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Nav from './components/NavSearch';
import MiApi from './components/MiApi';

const App = () => {
  const [info, setInfo] = useState([]);
  const [search, setSearch] = useState('');
  const [sortConfig, setSortConfig] = useState(null);

  useEffect(() => {
    const consultarInformacion = async () => {
      const url = 'https://midas.minsal.cl/farmacia_v2/WS/getLocalesTurnos.php';
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      setInfo(data);
    };
    consultarInformacion();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const requestSort = key => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  }

  let sortedInfo = [...info];
  if (sortConfig !== null) {
    sortedInfo.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }
  
  const filteredInfo = sortedInfo.filter((data) => {
    return (
      data.local_nombre.toLowerCase().includes(search.toLowerCase()) ||
      data.local_direccion.toLowerCase().includes(search.toLowerCase()) ||
      data.comuna_nombre.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <>
    <div className="container">
      <Nav onSearchChange={handleSearchChange} />
      <MiApi info={filteredInfo} searchTerm={search} onSort={requestSort} sortConfig={sortConfig} />
    </div>
    </>
  );
};

export default App;
