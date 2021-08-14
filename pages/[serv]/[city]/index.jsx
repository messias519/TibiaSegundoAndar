import Link from "next/link";
import useSWR from "swr";
import styles from "./../../styles.module.css";

import { Container, Grid, Breadcrumbs } from "@material-ui/core";

export async function getServerSideProps(context) {
  const serv = context.query.serv;

  const city = context.query.city;

  const resV = await fetch(
    `https://api.tibiadata.com/v2/houses/${serv}/${city}.json`
  );
  const data = await resV.json();

  return {
    props: { info: data }
  };
}

export default function info({ info }) {
  const casa = info.houses.houses;
  // const reload = info.information.last_updated;

  return (
    <Container className={styles.root}>
      <Container className={styles.header}>
        <h1> Segundo Andar </h1>
        <a> Sua imobiliária tibiana </a>
      </Container>
      <br />
      <Breadcrumbs className={styles.menu}>
        <Link href="/">
          <a>Lista de servidores</a>
        </Link>
        <Link href={`/${info.houses.world}`}>
          <a>Lista de casas</a>
        </Link>
      </Breadcrumbs>
      <br />
      <Grid container className={styles.listaServidoresGrid} spacing={4}>
        {casa.map((casa) => (
          <Grid item xs={6} key={casa.name} className={styles.listaCasas}>
            <a>
              <center> {casa.name} </center>
            </a>
            <br />
            <img
              src={`https://static.tibia.com/images/houses/house_${casa.houseid}.png`}
            />
            <a>
              <center> {casa.size}sqm </center>
            </a>
            <br />
            <a>
              <center> Preço de {casa.rent / 1000}k mensais </center>
            </a>
            <br />
            <a>
              <center> Status: {casa.status} </center>
            </a>
            <br />
          </Grid>
        ))}
      </Grid>
      <br />
    </Container>
  );
}
