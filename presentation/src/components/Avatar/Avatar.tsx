import React, { FC } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps {
  url: string;
  onClick: () => void;
}

const Avatar: FC<AvatarProps> = ({ url, onClick }) => (
  <div
    role="div"
    onKeyDown={() => onClick()}
    onClick={() => onClick()}
    className={styles.Avatar}
    style={{ backgroundImage: `url(${url})` }}
  />
);

export default Avatar;
