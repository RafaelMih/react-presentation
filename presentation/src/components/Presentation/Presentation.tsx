import React, { FC } from "react";
import { IPerson } from "../../interfaces/IPerson";
import Cep from "../Cep/Cep";
import styles from "./Presentation.module.css";

interface PresentationProps {
  person: IPerson | undefined;
}

const Presentation: FC<PresentationProps> = ({ person }) => (
  <div className={styles.Presentation}>
    <div>
      <b>Nome:</b> {person?.name}
    </div>
    <Cep cep={person?.cep} />
  </div>
);

export default Presentation;
