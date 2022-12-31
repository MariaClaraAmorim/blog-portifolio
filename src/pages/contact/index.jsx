import React from "react";
import { Container, Content } from "./style";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

import { AiOutlineLinkedin } from "react-icons/ai";
import ItemContact from "../../../components/ItemContact";

import Link from "next/link";

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact IconFa={FaFacebook} />
        <ItemContact IconFa={FaInstagram} />
        <ItemContact IconFa={AiOutlineLinkedin} />
        <ItemContact IconFa={FaEnvelope} />
      </Content>
    </Container>
  );
}
