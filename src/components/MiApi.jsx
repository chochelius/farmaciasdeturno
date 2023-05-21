const MiApi = ({info, onSort}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <table className="table table-striped">
            <thead className="bg-primary table-dark">
              <tr>
                <th scope="col" 
                    onClick={() => onSort('local_nombre')}
                >
                  Nombre
                </th>
                <th scope="col" 
                    onClick={() => onSort('local_direccion')}
                >
                  Dirección
                </th>
                <th scope="col" 
                    onClick={() => onSort('local_telefono')}
                >
                  Teléfono
                </th>
                <th scope="col" 
                    onClick={() => onSort('comuna_nombre')}
                >
                  Comuna
                </th>
                <th scope="col" 
                    onClick={() => onSort('funcionamiento_hora_apertura')}
                >
                  Horario
                </th>
              </tr>
            </thead>
            <tbody>
              {info.map(item => (
                <tr key={item.local_id}>
                  <td>{item.local_nombre}</td>
                  <td>{item.local_direccion}</td>
                  <td>{item.local_telefono}</td>
                  <td>{item.comuna_nombre}</td>
                  <td>{item.funcionamiento_hora_apertura} - {item.funcionamiento_hora_cierre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );  
} 

export default MiApi;
