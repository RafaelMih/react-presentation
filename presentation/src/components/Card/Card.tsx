import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./Card.module.css";

interface CardProps {
  header?: string;
  body?: string;
  icon?: IconDefinition;
  children?: JSX.Element | null;
}

const defaultProps: CardProps = {
  header: "",
  body: "",
  icon: faUser,
  children: null,
};

const Card: FC<CardProps> = ({ header, body, icon, children }) => (
  <div className={styles.Card}>
    <div className="card">
      <div className="card-header">
        <FontAwesomeIcon icon={icon ?? faUser} /> {header}
      </div>
      <div className="card-body">
        <p>{body}</p>
        {children ?? null}
      </div>
    </div>
  </div>
);

Card.defaultProps = defaultProps;

export default Card;
