import React, { FC, MouseEventHandler } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps {
  url: string;
  onClick: MouseEventHandler;
}

const Avatar: FC<AvatarProps> = ({ url, onClick }) => (
  <div
    onClick={onClick}
    className={styles.Avatar}
    style={{ backgroundImage: `url(${url})` }}
  />
);

export default Avatar;
