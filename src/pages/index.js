import { FaArrowRight } from "react-icons/fa";
import {
  Container,
  Content,
  Infos,
  Name,
  Function,
  Intro,
  LinkProjects,
  Logo,
  Img,
} from "../../styles/indexStyle";
import Link from "next/link";
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
