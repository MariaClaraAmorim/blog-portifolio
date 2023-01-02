import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import {
  Container,
  Content, Function, Img, Infos, Intro,
  LinkProjects,
  Logo, Name
} from "../../styles/indexStyle";
import Contact from "./contact";

export default function Home() {
  return (
    <>
      <Container>
        <Content>
          <Infos>
            <Name>Olá, sou Maria Clara Amorim</Name>
            <Function>Frontend Developer</Function>
            <Intro>
              Estudante no curso técnico em informática pelo IFBA - Campus
              Barreiras, tenho experiência em desenvolvimento Web (HTML, CSS,
              JS, React, TYPESCRIPT e outros).
            </Intro>
            <Link href="projects">
              <LinkProjects>
                PROJETOS <FaArrowRight />
              </LinkProjects>
            </Link>
          </Infos>
          <Logo>
            <Img src="./images/Maria.png" alt="logo" />
          </Logo>
        </Content>

      </Container>
        <Contact />
    </>
  );
}
