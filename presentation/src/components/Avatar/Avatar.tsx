import React, { FC } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps {
  url: string;
}

const Avatar: FC<AvatarProps> = ({ url }) => (
  <div className={styles.Avatar}>{url}</div>
);

export default Avatar;
