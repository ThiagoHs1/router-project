import React from 'react';
import styles from './Produto.module.css';
import { useParams } from 'react-router-dom';
import Head from './Head';

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchData(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json); // Corrigido aqui
      } catch (error) {
        setError(`Um erro ocorreu: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
    fetchData(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <p>{error}</p>;

  if (!produto) return null;
  return (
    <section className={styles.produto + ' animeLeft'}>
      <Head title={produto.nome} description={produto.descricao} />
      {produto.fotos.map((foto) => (
        <img key={foto.src} src={foto.src} alt={foto.alt} />
      ))}
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
        <h3>Fotos</h3>
        {/* Aqui você pode adicionar um loop para exibir as fotos, se houver */}
      </div>
    </section>
  );
};

export default Produto;
