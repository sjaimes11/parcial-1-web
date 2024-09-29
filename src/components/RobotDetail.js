import React from 'react';
import './RobotDetail.css'; // Custom CSS for styling

function RobotDetail({ robot }) {
  // Construcción dinámica de la URL de la imagen basada en el ID del robot
  const imageURL = `https://raw.githubusercontent.com/fai-aher/T34-Wiki-Backup/main/images/robot${robot.id}.png`;

  return (
    <div className="robot-detail-container">
      <h1>{robot.nombre}</h1>
      <img className="robot-image" src={imageURL} alt={robot.nombre} />
      <div className="robot-info">
        <p><strong>Año de Fabricación:</strong> {robot.añoFabricacion}</p>
        <p><strong>Capacidad de Procesamiento:</strong> {robot.capacidadProcesamiento}</p>
        <p><strong>Humor:</strong> {robot.humor}</p>
      </div>
    </div>
  );
}

export default RobotDetail;
