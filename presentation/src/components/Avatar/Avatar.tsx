import React, { FC } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps {
  url: string;
}

const Avatar: FC<AvatarProps> = ({ url }) => (
  <div className={styles.Avatar} style={{ backgroundImage: `url(${url})` }} />
);

export default Avatar;
