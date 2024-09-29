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
        <p>
          <strong><FormattedMessage id="robot.detail.year" defaultMessage="Year of Manufacture" />:</strong> {robot.añoFabricacion}
        </p>
        <p>
          <strong><FormattedMessage id="robot.detail.processing" defaultMessage="Processing Capacity" />:</strong> {robot.capacidadProcesamiento}
        </p>
        <p className="robot-humor">
          <strong><FormattedMessage id="robot.detail.additional" defaultMessage="Humor" />:</strong> {robot.humor}
        </p>
      </div>
    </div>
  );
}

export default RobotDetail;
