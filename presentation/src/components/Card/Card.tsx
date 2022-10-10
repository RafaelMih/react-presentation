import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import styles from "./Card.module.css";

interface CardProps {
  header: string | undefined;
  body: string | undefined;
  icon: IconDefinition;
}

const Card: FC<CardProps> = ({ header, body, icon }) => (
  <div className={styles.Card}>
    <div className="card">
      <div className="card-header">
        <FontAwesomeIcon icon={icon} /> {header}
      </div>
      <div className="card-body">
        <p>{body}</p>
      </div>
    </div>
  </div>
);

export default Card;
