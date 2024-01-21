import React from 'react';
import styles from './Produtos.module.css';
import { NavLink, Link } from 'react-router-dom';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState([]);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((r) => r.json())
      .then((json) => setProdutos(json));
  }, []);

  if (produtos === null) return null;
  return (
    <section className={styles.produtos + ' animeLeft'}>
      {produtos.map((produto) => (
        <Link
          to={`/produto/${produto.id}`}
          className={styles.produto}
          key={produto.id}
        >
          {' '}
          <img src={produto.fotos[0].src} alt={produto.fotos[0].alt} />
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
