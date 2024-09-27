import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function RobotList() {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch('https://api-url.com/robots')
      .then(response => response.json())
      .then(data => setRobots(data));
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Modelo</th>
          <th>Empresa</th>
        </tr>
      </thead>
      <tbody>
        {robots.map(robot => (
          <tr key={robot.id}>
            <td>{robot.name}</td>
            <td>{robot.model}</td>
            <td>{robot.company}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default RobotList;
