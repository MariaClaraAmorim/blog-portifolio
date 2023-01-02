import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

import { AiOutlineLinkedin } from "react-icons/ai";

import ItemContact from "../../../components/ItemContact";

import Link from "next/link";
import css from "./styles.module.css";

export default function Contact() {
  return (
    <div className={css.container}>
      <div className={css.content}>
        <div className={css.itemContact}>
          <FaFacebook />
        </div>

        <div className={css.itemContact}>
          <Link href="https://www.instagram.com/mariaclara.amorim_/">
            <FaInstagram />
          </Link>
        </div>
        <div className={css.itemContact}>
          <AiOutlineLinkedin />
        </div>

        <div className={css.itemContact}>
          <FaEnvelope />
        </div>
      </div>
    </div>
  );
}
