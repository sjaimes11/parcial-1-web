import React from 'react';
import './RobotDetail.css'; // Custom CSS for styling

function RobotDetail({ robot }) {
  return (
    <div className="robot-detail-container">
      <h1>{robot.nombre}</h1>
      <img className="robot-image" src={robot.imagen } alt={robot.nombre} />
      <div className="robot-info">
        <p><strong>Año de Fabricación:</strong> {robot.añoFabricacion}</p>
        <p><strong>Capacidad de Procesamiento:</strong> {robot.capacidadProcesamiento}</p>
        <p><strong>Humor:</strong> {robot.humor}</p>
      </div>
    </div>
  );
}

export default RobotDetail;
