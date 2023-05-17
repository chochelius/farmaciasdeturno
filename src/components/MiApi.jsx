const MiApi = ({info}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <table className="table table-striped">
            <thead className="bg-primary table-dark">
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Dirección</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Comuna</th>
                <th scope="col">Horario</th>
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
