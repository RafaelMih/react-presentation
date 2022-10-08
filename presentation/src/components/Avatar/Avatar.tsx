import React, { FC, MouseEventHandler } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps {
  url: string;
  onClick: MouseEventHandler;
}

const Avatar: FC<AvatarProps> = ({ url, onClick }) => (
  <div className="pointer">
    <div
      onClick={onClick}
      className={styles.Avatar}
      style={{ backgroundImage: `url(${url})` }}
    />
  </div>
);

export default Avatar;
