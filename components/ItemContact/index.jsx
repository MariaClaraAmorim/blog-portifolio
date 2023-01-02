import React from "react";

import css from "./styles.module.css";

export default function ItemContact({ IconFa, LinkContact }) {
  return (
    <div className={css.item}>
      <div>
        <IconFa />
      </div>
      <div className={css.text}>{LinkContact}</div>
    </div>
  );
}
