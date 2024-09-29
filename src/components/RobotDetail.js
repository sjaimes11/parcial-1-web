import React from 'react';
import './RobotDetail.css'; // Estilos personalizados
import { FormattedMessage } from 'react-intl'; // Importar FormattedMessage para traducción

function RobotDetail({ robot }) {
  const imageURL = `https://raw.githubusercontent.com/fai-aher/T34-Wiki-Backup/main/images/robot${robot.id}.png`;

  return (
    <div className="robot-detail-container">
      <h1>{robot.nombre}</h1>
      <img className="robot-image" src={imageURL} alt={robot.nombre} />
      <div className="robot-info">
        <p><strong><FormattedMessage id="robot.detail.year" />:</strong> {robot.añoFabricacion}</p>
        <p><strong><FormattedMessage id="robot.detail.processing" />:</strong> {robot.capacidadProcesamiento}</p>
        <p><strong><FormattedMessage id="robot.detail.additional" />:</strong> {robot.humor}</p>
      </div>
    </div>
  );
}

export default RobotDetail;
