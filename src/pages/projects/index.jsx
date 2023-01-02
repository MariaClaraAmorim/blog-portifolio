import Image from "next/image";
import React, { useEffect, useState } from "react";

import css from "./styles.module.css";

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
    <div className={css.container}>
      <div className={css.content}>
        <ul className={css.ul}>
          {itemsApi.map((item) => (
            <li className={css.li} key={item.id}>
              <div className={css.box}>
                <div className={css.capaProject}>
                  <img  src="https://via.placeholder.com/150" alt="logo" />
                </div>

                <div className={css.description}>
                  <div className={css.titleProject}>
                    {item.name.toUpperCase()}
                  </div>
                  <div className={css.url}>URL: {item.url}</div>
                  <div className={css.created_at}>
                    Data Criação:{" "}
                    {Intl.DateTimeFormat("pt-BR").format(
                      new Date(item.created_at)
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
