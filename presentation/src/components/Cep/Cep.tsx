import axios from "axios";
import React, { FC, useCallback, useState } from "react";
import { IAddress } from "../../interfaces/IAddress";
import Address from "../Address/Address";
import { Button } from "../styles";
import styles from "./Cep.module.css";

interface CepProps {
  cep: string;
}

const Cep: FC<CepProps> = ({ cep }) => {
  const [address, setAddress] = useState<IAddress>();

  const searchAddress = useCallback(() => {
    axios
      .get<IAddress>(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        setAddress(response.data);
      });
  }, []);

  return (
    <div className={styles.Cep}>
      <Button onClick={searchAddress} type="button">
        {cep}
      </Button>
      <div>{address ? <Address address={address} /> : null}</div>
    </div>
  );
};

export default Cep;
