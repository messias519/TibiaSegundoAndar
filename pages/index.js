import Link from "next/link";
import useSWR from "swr";
import styles from "./styles.module.css";

import { Container, Grid, Breadcrumbs } from "@material-ui/core";

export default function Home() {
  const urlServList = "https://api.tibiadata.com/v2/worlds.json";
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(urlServList, fetcher);

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  return (
    <Container className={styles.root}>
      <Container className={styles.header}>
        <h1> Segundo Andar </h1>
        <a> Sua imobiliária tibiana </a>
      </Container>
      <br />

      <br />
      <Container className={styles.listaServidores}>
        <h2> Selecione o servidor </h2>
        <br />
        <Grid container className={styles.listaServidoresGrid} spacing={1}>
          {data.worlds.allworlds.map((option) => (
            <Grid
              item
              xs={3}
              key={option.name}
              className={styles.listaServidorNomes}
            >
              <Link href={`/${option.name}`}>{option.name}</Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}
