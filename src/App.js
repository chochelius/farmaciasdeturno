import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Nav from './components/NavSearch';
import MiApi from './components/MiApi';

const App = () => {
  const [info, setInfo] = useState([]);
  const [search, setSearch] = useState('');

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

  const filteredInfo = info.filter((data) => {
    // filtrar por nombre comuna o dirección
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
      <MiApi info={filteredInfo} searchTerm={search} />
    </div>
    </>
  );
};

export default App;
