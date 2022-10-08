import React, { FC } from "react";
import { IPerson } from "../../interfaces/IPerson";
import Cep from "../Cep/Cep";
import styles from "./Presentation.module.css";

interface PresentationProps {
  person: IPerson | undefined;
}

const Presentation: FC<PresentationProps> = ({ person }) => (
  <div className={styles.Presentation}>
    <div className="div-photo">
      <img src={person?.photoUrl} alt={person?.name} />
    </div>
    <div>
      <div>
        <b>{person?.name}</b>
      </div>
      <div>{person?.function}</div>
      <hr />
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
