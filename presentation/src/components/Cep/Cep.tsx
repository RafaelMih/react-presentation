import React, { FC } from "react";
import styles from "./Cep.module.css";

interface CepProps {
  cep: string;
}

const Cep: FC<CepProps> = ({ cep }) => <div className={styles.Cep}>{cep}</div>;

export default Cep;
