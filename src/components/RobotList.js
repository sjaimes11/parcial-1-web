import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import './RobotList.css'; // Estilos personalizados
import RobotDetail from './RobotDetail'; // Componente RobotDetail
import { FormattedMessage } from 'react-intl'; // Importar FormattedMessage para traducir cadenas

function RobotList() {
  const [robots, setRobots] = useState([]);
  const [selectedRobot, setSelectedRobot] = useState(null); // Estado para almacenar el robot seleccionado

  useEffect(() => {
    fetch('http://localhost:3001/robots')
      .then(response => response.json())
      .then(data => setRobots(data))
      .catch(error => console.error('Error fetching robots:', error));
  }, []);

  // Función para manejar la selección del robot
  const handleRobotClick = (robotId) => {
    const robot = robots.find(r => r.id === robotId); // Buscar el robot seleccionado por ID
    setSelectedRobot(robot); // Actualizar el estado con el robot seleccionado
  };

  return (
    <div className="robot-list-container">
      <h1 className="text-center">
        <FormattedMessage id="app.title" />
      </h1>
      <img className="banner-image" src="/image 4.png" alt="Robot Banner" />

      <div className="robot-content">
        {/* Lista de Robots */}
        <div className="robot-list">
          <Table striped bordered hover responsive className="robot-table mt-4">
            <thead>
              <tr>
                <th><FormattedMessage id="table.header.id" /></th>
                <th><FormattedMessage id="table.header.name" /></th>
                <th><FormattedMessage id="table.header.model" /></th>
                <th><FormattedMessage id="table.header.manufacturer" /></th>
              </tr>
            </thead>
            <tbody>
              {robots.map((robot) => (
                <tr key={robot.id} onClick={() => handleRobotClick(robot.id)}>
                  <td>{robot.id}</td>
                  <td>{robot.nombre}</td>
                  <td>{robot.modelo}</td>
                  <td>{robot.empresaFabricante}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        {/* Detalle del Robot */}
        <div className="robot-detail">
          {selectedRobot ? (
            <RobotDetail robot={selectedRobot} />
          ) : (
            <p><FormattedMessage id="robot.select.prompt" /></p>
          )}
        </div>
      </div>

      <footer className="text-center mt-4">
        <p><FormattedMessage id="footer.contact" /></p>
      </footer>
    </div>
  );
}

export default RobotList;
