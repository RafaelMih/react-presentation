import axios from "axios";
import React, { FC, useCallback, useEffect, useState } from "react";
import { IAddress } from "../../interfaces/IAddress";
import Address from "../Address/Address";
import { Button } from "../styles";
import styles from "./Cep.module.css";

interface CepProps {
  cep: string | undefined;
}

const Cep: FC<CepProps> = ({ cep }) => {
  const [address, setAddress] = useState<IAddress>();
  const [error, setError] = useState<string>();

  const searchAddress = useCallback(() => {
    if (cep) {
      axios
        .get<IAddress>(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
          setAddress(response.data);
        })
        .catch((ex) => {
          setError(`Erro ao buscar dados de endereço - ${ex}`);
        });
    }
  }, [cep]);

  useEffect(() => {
    setError("");
    setAddress(undefined);
  }, [cep]);

  return (
    <div className={styles.Cep}>
      <Button className="pointer" onClick={searchAddress} type="button">
        {cep}
      </Button>
      <u>
        <small className="pointer" onClick={searchAddress}>
          Visualizar endereço
        </small>
      </u>
      <div>
        <hr />
      </div>
      <div>{address ? <Address address={address} /> : null}</div>
      <div>{error ?? null}</div>
    </div>
  );
};

export default Cep;
