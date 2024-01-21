import React from 'react';
import styles from './Contato.module.css';
import img from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={styles.contato + ' animeLeft'}>
      <Head title="Contato" description="Entre em contato" />
      <img src={img} alt="Maquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>
            <a href="tel:+5521999999999">Ligar</a>
          </li>
          <li>
            <a href="mailto:emailparacontato@email.com">
              Emailparacontato@email.com
            </a>
          </li>
          <li>Rua Alguma coisa, 123</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
