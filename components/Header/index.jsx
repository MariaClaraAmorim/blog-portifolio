import React, { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars, FaTimes } from "react-icons/fa";
import css from "./styles.module.css";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  const { asPath } = useRouter();

  const showSiderbar = () => setSidebar(!sidebar);

  function activeLink(path) {
    return asPath === `/${path}` ? "active" : "";
  }

  return (
    <div className={css.container}>
      <div className={css.content}>
        <div className={css.contentTitle}>
          <h1 className={css.title}>Maria Clara Amorim</h1>
        </div>
        <div className={css.menu}>
          <FaBars onClick={showSiderbar} />
        </div>
        <div className={css.navLinks} sidebar={sidebar}>
          <div className={css.closeSidebar} onClick={showSiderbar}>
            <FaTimes />
          </div>
          <Link href="/">
            <div className={activeLink("") + "" + css.ancora}   onClick={showSiderbar}>
              Home
            </div>
          </Link>
          <Link href="projects">
            <div className={activeLink("projects") + "" + css.ancora}  onClick={showSiderbar}>
              Projetos
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
