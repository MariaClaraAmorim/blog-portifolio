import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Olá, sou Maria Clara Amorim</Name>
        <Function>Frontend Developer</Function>
        <Intro>Estudante no curso técnico em informática pelo IFBA - Campus Barreias, 
          tenho experiência em desenvolvimento Web
          (React, JS e outros).
        </Intro>
        <Link href="projects">
          <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="https://avatars.dicebear.com/api/micah/your-custom-seed.svg" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}