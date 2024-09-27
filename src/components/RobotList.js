import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import './RobotList.css'; // Custom CSS for styling
import RobotDetail from './RobotDetail'; // Import RobotDetail component

function RobotList() {
  const [robots, setRobots] = useState([]);
  const [selectedRobot, setSelectedRobot] = useState(null); // State to store selected robot

  useEffect(() => {
    fetch('http://localhost:3001/robots')
      .then(response => response.json())
      .then(data => setRobots(data))
      .catch(error => console.error('Error fetching robots:', error));
  }, []);

  // Function to handle robot selection
  const handleRobotClick = (robotId) => {
    const robot = robots.find(r => r.id === robotId); // Find the selected robot by ID
    setSelectedRobot(robot); // Update the selected robot state
  };

  return (
    <div className="robot-list-container">
      <h1 className="text-center">Adopta un Robot con Robot Lovers!</h1>
      <img className="banner-image" src="/image 4.png" alt="Robot Banner" />

      <div className="robot-content">
        {/* Robot List */}
        <div className="robot-list">
          <Table striped bordered hover responsive className="robot-table mt-4">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Modelo</th>
                <th>Empresa Fabricante</th>
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

        {/* Robot Detail */}
        <div className="robot-detail">
          {selectedRobot ? (
            <RobotDetail robot={selectedRobot} />
          ) : (
            <p>Seleccione un robot para ver sus detalles</p>
          )}
        </div>
      </div>

      <footer className="text-center mt-4">
        <p>Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
      </footer>
    </div>
  );
}

export default RobotList;
