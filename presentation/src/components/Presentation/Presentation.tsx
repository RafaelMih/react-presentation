import React, { FC } from "react";
import { IPerson } from "../../interfaces/IPerson";
import Cep from "../Cep/Cep";
import styles from "./Presentation.module.css";

interface PresentationProps {
  person: IPerson | undefined;
}

const Presentation: FC<PresentationProps> = ({ person }) => (
  <div className={styles.Presentation}>
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="div-photo">
            <img
              width="300"
              height="300"
              src={person?.photoUrl}
              alt={person?.name}
            />
          </div>
        </div>
        <div className="col">
          <div>
            <b>{person?.name}</b>
          </div>
          <div>{person?.function}</div>
          <hr />
        </div>
      </div>
    </div>
    <div>
      <div>
        <div>Sobre {person?.name.split(" ")[0]}</div>
        <div>{person?.about}</div>
      </div>
      <Cep cep={person?.cep} />
      <div>{person?.experience}</div>
    </div>
  </div>
);

export default Presentation;
