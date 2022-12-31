import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Container,
  Content,
  Ul,
  Box,
  Li,
  TitleProject,
  Url,
  Created_at,
  CapaProject,
  Img,
  Description
} from "./style";

export default function Projects() {
  const [itemsApi, setItemsApi] = useState([]);

  useEffect(() => {
    let abortController = new AbortController();

    function getGitHubAPI() {
      fetch("https://api.github.com/users/MariaClaraAmorim/repos")
        .then(async (res) => {
          if (!res.ok) {
            throw new Error(res.status);
          }
          var data = await res.json();
          setItemsApi(data);
        })
        .catch((e) => console.log(e));
    }

    getGitHubAPI();

    return () => abortController.abort();
  }, []);

  return (
    <Container>
      <Content>
        <Ul>
          {itemsApi.map((item) => (
            <Li key={item.id}>
              <Box>
                <CapaProject>
                  <Img src="https://via.placeholder.com/150" alt="logo" />
                </CapaProject>

                <Description>
                  <TitleProject>{item.name.toUpperCase()}</TitleProject>
                  <Url>URL: {item.url}</Url>
                  <Created_at>
                    Data Criação:{" "}
                    {Intl.DateTimeFormat("pt-BR").format(
                      new Date(item.created_at)
                    )}
                  </Created_at>
                </Description>
              </Box>
            </Li>
          ))}
        </Ul>
      </Content>
    </Container>
  );
}
