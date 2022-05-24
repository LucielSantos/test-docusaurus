import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.heroBanner}>
        <img src='img/logo.png' className={styles.headerImg} />

        <h1 className={styles.description}>{siteConfig.tagline}</h1>

        <h3>Primeiros passos</h3>

        <div className={styles.buttonsContainer}>
          <a className={clsx('button button--outline button--primary', styles.gettingStartBtn)} href='docs/react-js/getting-started'>React JS</a>

          <a className={clsx('button button--outline button--primary', styles.gettingStartBtn)} href='docs/react-native/getting-started'>React Native</a>
        </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
        
      <HomepageHeader />

      <div className={styles.benefits}>
        <div className={clsx('card', styles.benefitCard)}>
          <div className='card__header'>
            <h3>Fácil de aprender</h3>
          </div>

          <div className="card__body">
            A biblioteca foi construída pensando em otimizar o tempo do desenvolvedor, facilitando a implementação e customização.
          </div>
        </div>
        
        <div className={clsx('card', styles.benefitCard)}>
          <div className='card__header'>
            <h3>Padrões pré-definidos</h3>
          </div>

          <div className="card__body">
            Trazendo padrões já definidos pelo Design system, o desenvolvedor pode esquecer os maiores detalhes.
          </div>
        </div>

        <div className={clsx('card', styles.benefitCard)}>
          <div className='card__header'>
            <h3>Flexível</h3>
          </div>

          <div className="card__body">
            A biblioteca possui um pacote core, onde são definidos padrões, o que torna possível a utilização em qualquer framework.
          </div>
        </div>
      </div>
    </Layout>
  );
}
