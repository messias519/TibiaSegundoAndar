import Link from "next/link";
import styles from "./../styles.module.css";

import { Container, Grid, Breadcrumbs } from "@material-ui/core";

export async function getServerSideProps(props) {
  const servidor = props.query.serv;
  return {
    props: { serv: servidor }
  };
}

export default function servidor(serv) {
  const cidade = [
    "Ab'Dendriel",
    "Ankrahmun",
    "Carlin",
    "Darashia",
    "Edron",
    "Farmine",
    "Gray Beach",
    "Issavi",
    "Kazordoon",
    "Liberty Bay",
    "Port Hope",
    "Rathleton",
    "Svargrond",
    "Thais",
    "Venore",
    "Yalahar"
  ];

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
      </Breadcrumbs>
      <br />
      <Container className={styles.listaCidades}>
        <h2> Selecione a cidade </h2>
        <br />
        <Grid container className={styles.listaServidoresGrid} spacing={1}>
          {cidade.map((option) => (
            <Grid
              item
              xs={3}
              key={option}
              className={styles.listaServidorNomes}
            >
              <Link href={`/${serv.serv}/${option}`}>{option}</Link>
            </Grid>
          ))}
        </Grid>
        <br />
      </Container>
    </Container>
  );
}
