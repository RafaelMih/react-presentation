import React, { FC } from "react";
import { IAddress } from "../../interfaces/IAddress";
import styles from "./Address.module.css";

interface AddressProps {
  address: IAddress | undefined;
}

const Address: FC<AddressProps> = ({ address }) => (
  <div className={styles.Address}>
    <div>
      <b>Endereço: </b>
      {address?.logradouro}
    </div>
    <div>
      <b>Bairro: </b>
      {address?.bairro}
    </div>
    <div>
      <b>Cidade: </b>
      {address?.localidade}
    </div>
    <div>
      <b>Estado: </b>
      {address?.uf}
    </div>
  </div>
);

export default Address;
