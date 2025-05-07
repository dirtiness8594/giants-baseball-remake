import React from 'react';
import { CiCircleInfo } from "react-icons/ci";

function Page() {
  return (
    <main className="page">
      <section className="page__header">
        <h1 className="page__title">Nossa história</h1>
        <p className="page__subtitle">
          <CiCircleInfo /> Se apaixone pela nossa história
        </p>
      </section>

      <section className="page__content">
        <p>
          Esta página pode ser usada para mostrar mais detalhes sobre eventos,
          campeonatos, treinamentos ou outras atividades do São Paulo Giants.
        </p>
        <p>
          Sinta-se à vontade para modificar este conteúdo conforme necessário. Aqui é um
          bom lugar para colocar notícias, regulamentos ou galerias de fotos.
        </p>
      </section>
    </main>
  );
}

export default Page;
